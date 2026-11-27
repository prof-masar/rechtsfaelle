/* Rechts-Quest – lokale Text-App (Fälle 1–14). Keine Netzwerkzugriffe, kein Tracking. */
(function () {
  "use strict";

  var faelle = (Array.isArray(window.FAELLE) ? window.FAELLE : []).filter(function (f) {
    return f && f.id && Array.isArray(f.schritte) && f.schritte.length && f.typ !== "ergaenzungskarte";
  });
  var bausteine = (Array.isArray(window.BAUSTEINE) ? window.BAUSTEINE : []).filter(function (f) {
    return f && f.id && f.typ === "ergaenzungskarte" && Array.isArray(f.schritte) && f.schritte.length;
  });
  var q = null;
  var app = document.getElementById("app");

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k === "style") n.setAttribute("style", v);
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    });
    (children || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function setAppView() {
    stopFloatWatch();
    app.classList.remove("view-urteil", "view-ergebnis", "view-step", "has-step-actions");
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i]) app.classList.add(arguments[i]);
    }
  }
  var floatCleanup = null;
  function stopFloatWatch() {
    if (floatCleanup) { floatCleanup(); floatCleanup = null; }
  }
  function isPhoneStep() {
    try { return window.matchMedia && window.matchMedia("(max-width: 699px)").matches; } catch (e) { return false; }
  }
  function isAtPageBottom() {
    var root = document.documentElement;
    var viewH = window.innerHeight || root.clientHeight;
    var remaining = root.scrollHeight - (window.pageYOffset || window.scrollY || 0) - viewH;
    return remaining <= 12;
  }
  function watchNextFloat(btn) {
    stopFloatWatch();
    function update() {
      if (!btn) return;
      if (btn.hidden || !isPhoneStep() || !isAtPageBottom()) btn.classList.remove("is-at-bottom");
      else btn.classList.add("is-at-bottom");
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    var vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", update);
      vv.addEventListener("scroll", update);
    }
    update();
    requestAnimationFrame(function () { requestAnimationFrame(update); });
    floatCleanup = function () {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (vv) {
        vv.removeEventListener("resize", update);
        vv.removeEventListener("scroll", update);
      }
      if (btn) btn.classList.remove("is-at-bottom");
    };
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function formatDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    return m ? (Number(m[3]) + "." + Number(m[2]) + "." + m[1]) : String(iso || "");
  }
  function safeColor(c) { return /^#[0-9a-fA-F]{3,8}$/.test(String(c || "")) ? c : "#2f4f7f"; }
  function stepXpList(quest) {
    var total = Math.max(0, Math.round(Number(quest.belohnung && quest.belohnung.xp) || 0));
    var n = quest.schritte.length, base = Math.floor(total / n), rest = total - base * n, out = [];
    for (var i = 0; i < n; i++) out.push(base + (i < rest ? 1 : 0));
    return out;
  }
  function stepGain(stepXp, tries) { return tries <= 1 ? stepXp : Math.floor(stepXp / 2); }
  function focusTop() {
    try { app.focus({ preventScroll: true }); } catch (e) { app.focus(); }
    window.scrollTo(0, 0);
  }
  function overflowPx() {
    return document.documentElement.scrollHeight - document.documentElement.clientHeight;
  }

  var STORE_KEY = "rechtsquest_v1";
  var XP_PER_LEVEL = 100;
  var LEVEL_TITLES = ["Neuling", "Spürnase", "Detektiv:in", "Expert:in", "Profi", "Meister:in", "Legende"];
  var progressMem = null;
  var storageOk = (function () {
    try {
      var k = "__rechtsquest_test__";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  })();
  function emptyProgress() { return { v: 1, items: {} }; }
  function loadProgress() {
    if (!storageOk) return progressMem || (progressMem = emptyProgress());
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      if (!raw) return emptyProgress();
      var s = JSON.parse(raw);
      if (!s || typeof s !== "object" || !s.items || typeof s.items !== "object") return emptyProgress();
      return s;
    } catch (e) { return emptyProgress(); }
  }
  function saveProgress(s) {
    if (!storageOk) { progressMem = s; return; }
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(s)); }
    catch (e) { storageOk = false; progressMem = s; }
  }
  function resetProgress() {
    progressMem = emptyProgress();
    if (storageOk) { try { window.localStorage.removeItem(STORE_KEY); } catch (e) {} }
  }
  function recordProgress(item, xp) {
    var s = loadProgress();
    var prev = s.items[item.id] || {};
    var best = Math.max(Number(prev.bestXp) || 0, xp);
    s.items[item.id] = { done: true, bestXp: best, lastXp: xp };
    saveProgress(s);
    return s;
  }
  function itemState(id) { return loadProgress().items[id] || {}; }
  function totalXp() {
    var s = loadProgress(), sum = 0;
    Object.keys(s.items).forEach(function (id) { sum += Number(s.items[id].bestXp) || 0; });
    return sum;
  }
  function levelInfo(xp) {
    var level = Math.floor(xp / XP_PER_LEVEL) + 1;
    var title = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
    return { level: level, title: title, inLevel: xp % XP_PER_LEVEL, xp: xp };
  }
  function allOrdenItems() {
    return faelle.concat(bausteine);
  }
  function bausteinForFall(fall) {
    if (!fall) return null;
    var i;
    for (i = 0; i < bausteine.length; i++) {
      var b = bausteine[i];
      var bez = String(b.bezug_fall || "");
      var bezId = bez.replace(/_/g, "-");
      if (bez && (bez === fall.id || bezId === fall.id || fall.id.indexOf(bezId + "-") === 0)) return b;
      if (bez === "recht_fall1" && fall.id === "recht-fall1-getraenk") return b;
    }
    return null;
  }
  function isBaustein(fall) {
    fall = fall || q;
    return !!(fall && fall.typ === "ergaenzungskarte");
  }

  var run = null;

  /* Übersicht nach Rechtsgebieten. Neue Fälle tragen "gebiet", Fälle 1–5 werden über "klasse" zugeordnet. */
  var GEBIETE = ["Rechtsordnung und Staat", "Privatrecht im Alltag", "Arbeit und Unternehmen", "Familie und Erbe", "Strafrecht"];
  var GEBIET_AUS_KLASSE = { "Strafrecht": "Strafrecht", "Familienrecht": "Familie und Erbe" };
  function gebietVon(fall) {
    return fall.gebiet || GEBIET_AUS_KLASSE[fall.klasse] || fall.klasse || "Weitere Fälle";
  }

  /* Bildzuordnung nur im Prototyp, nicht in den Fall-JSONs. Fälle 6–14: Szenenbilder im Stil der Fälle 1–5. */
  var BILDER = {
    "recht-fall1-getraenk": {
      start: { src: "bilder/fall1_lokal.jpg", alt: "Ein wütender Gast sitzt in einem Wiener Lokal. Vor ihm stehen Saft, Kaffee und Bier. Ein Kellner mit Tablett schaut besorgt." },
      verhandlung: { src: "bilder/fall1_verhandlung.jpg", alt: "Ein Gerichtssaal: Die Richterin sitzt in der Mitte, der Angeklagte steht am Pult, Anklage und Verteidigung sitzen seitlich, Geschworene auf der Bank." },
      urteil: { src: "bilder/fall1_urteil_v2.jpg", alt: "Die Richterin steht hinter der Richterbank und liest das Urteil vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    },
    "recht-fall2-fahrrad": {
      start: { src: "bilder/fall2_szene.jpg", alt: "Im Park liegt ein Fahrrad ohne Schloss im Gras. Ein junger Mann steht daneben und schaut auf das Rad." },
      verhandlung: { src: "bilder/fall2_verhandlung.jpg", alt: "Ein Gerichtssaal: Der Richter sitzt in der Mitte, der Angeklagte steht am Pult, eine Zeugin und ein Anwalt sitzen seitlich, im Hintergrund ein Fahrrad." },
      urteil: { src: "bilder/fall2_urteil.jpg", alt: "Der Richter steht hinter der Richterbank und liest das Urteil vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    },
    "recht-fall3-onlineshop": {
      start: { src: "bilder/fall3_szene.jpg", alt: "Eine junge Frau sitzt zu Hause am Laptop und wartet auf eine Bestellung. Auf dem Bildschirm sind nur farbige Flächen, kein Text." },
      verhandlung: { src: "bilder/fall3_verhandlung.jpg", alt: "Ein Gerichtssaal: Die Richterin sitzt in der Mitte, der Angeklagte sitzt links mit Unterlagen, rechts sitzen Anwalt und Käuferin, Geschworene auf der Bank." },
      urteil: { src: "bilder/fall3_urteil.jpg", alt: "Die Richterin steht hinter der Richterbank und liest das Urteil vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    },
    "recht-fall4-auto": {
      start: { src: "bilder/fall4_szene.jpg", alt: "In einer Tiefgarage steht ein Mann neben einem blauen Auto mit Kratzern. An der Wand hängt eine Überwachungskamera." },
      verhandlung: { src: "bilder/fall4_verhandlung.jpg", alt: "Ein Gerichtssaal: Der Richter sitzt in der Mitte, der Angeklagte steht am Pult, eine Zeugin und ein Anwalt sitzen seitlich, Geschworene auf der Bank." },
      urteil: { src: "bilder/fall4_urteil.jpg", alt: "Der Richter steht hinter der Richterbank und liest das Urteil vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    },
    "recht-fall5-kontaktrecht": {
      start: { src: "bilder/fall5_szene.jpg", alt: "Ein Jugendlicher steht friedlich zwischen Mutter und Vater vor einem Haus, ein Fußball liegt am Boden." },
      verhandlung: { src: "bilder/fall5_verfahren.jpg", alt: "Ein kleiner Verhandlungsraum am Bezirksgericht: Die Richterin spricht ruhig mit einem Jugendlichen und seinen Eltern." },
      verfahren: { src: "bilder/fall5_verfahren.jpg", alt: "Ein kleiner Verhandlungsraum am Bezirksgericht: Die Richterin spricht ruhig mit einem Jugendlichen und seinen Eltern." },
      ergebnis: { src: "bilder/fall5_ergebnis.jpg", alt: "Die Richterin steht hinter der Richterbank und liest die Einigung vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    },
    "recht-fall6-volljaehrig": {
      start: { src: "bilder/fall6_szene.jpg", alt: "In einer hellen Küche stehen drei Geschwister: Die ältere Schwester lächelt vor einer Geburtstagstorte mit Kerzen, die jüngere hält eine neue Handy-Schachtel, der kleine Bruder isst ein Eis." }
    },
    "recht-fall7-verfassung": {
      start: { src: "bilder/fall7_szene.jpg", alt: "In einem Wahllokal in einem Turnsaal wirft ein Jugendlicher stolz seinen Stimmzettel in die Wahlurne. Daneben stehen eine Wahlkabine und die rot-weiß-rote Fahne, hinten sitzen zwei Wahlbeisitzer." }
    },
    "recht-fall8-onlinekauf": {
      start: { src: "bilder/fall8_szene.jpg", alt: "Ein junger Mann sitzt am Schreibtisch und schaut verärgert auf einen runden Lautsprecher in seiner Hand. Daneben stehen ein offenes Paket und ein Laptop." }
    },
    "recht-fall9-kaution": {
      start: { src: "bilder/fall9_szene.jpg", alt: "In einer Wiener Altbauwohnung steht eine junge Frau mit Kaffeetasse überrascht in der Küche. Hinter ihr kommt der ältere Vermieter mit seinem Schlüssel unangemeldet durch die Wohnungstür." }
    },
    "recht-fall10-arbeit": {
      start: { src: "bilder/fall10_szene.jpg", alt: "Spätabends in einem Wiener Café: Eine junge Kellnerin trägt ein Tablett mit Tassen. Hinter der Theke reicht ihr der Chef ein Kuvert, die Stühle stehen schon auf den Tischen." }
    },
    "recht-fall11-moped": {
      start: { src: "bilder/fall11_szene.jpg", alt: "Auf einer Straße in der Abenddämmerung steht ein Jugendlicher mit Helm in der Hand neben seinem Moped. Erschrocken schaut er auf den gesprungenen Außenspiegel eines geparkten blauen Autos." }
    },
    "recht-fall12-gewerbe": {
      start: { src: "bilder/fall12_szene.jpg", alt: "In einem kleinen Nagelstudio modelliert eine junge Frau einer Kundin Kunstnägel. Im Regal stehen bunte Nagellackflaschen, in der Ecke Pakete für den Online-Versand." }
    },
    "recht-fall13-erbe": {
      start: { src: "bilder/fall13_szene.jpg", alt: "Vor einem Einfamilienhaus im Herbst: Ein Mann mit Rechen zeigt auf das Haus, in der Mitte steht die ältere Witwe, daneben die jugendliche Enkelin mit Rucksack." }
    },
    "recht-fall14-eu": {
      start: { src: "bilder/fall14_szene.jpg", alt: "Ein junger Mann mit Rucksack und Koffer telefoniert lächelnd an einem Hafen in den Niederlanden. Im Hintergrund sind Giebelhäuser, eine Brücke und Kräne, daneben eine Bar und die Europafahne." }
    },
    "recht-baustein-21-unterbringung": {
      start: { src: "bilder/baustein21_streifen.jpg", alt: "Die Richterin steht hinter der Richterbank. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
    }
  };
  function caseImages() { return (q && BILDER[q.id]) || {}; }
  function sceneImage(key) {
    var b = caseImages()[key];
    if (!b) return null;
    return el("img", { class: b.cls || "quest-img", src: b.src, alt: b.alt, loading: "lazy", width: "1280", height: b.cls && b.cls.indexOf("strip") >= 0 ? "427" : "720" });
  }
  function isZivilfall(fall) {
    fall = fall || q;
    return !!(fall && fall.ergebnis && !fall.urteil);
  }

  function isFirstVerhandlung(i) {
    var s = q.schritte[i];
    if (!s || !s.abschnitt) return false;
    if (s.abschnitt.indexOf("Teil 2") === -1 && s.abschnitt.indexOf("Verhandlung") === -1) return false;
    if (i === 0) return true;
    var prev = q.schritte[i - 1].abschnitt || "";
    return prev.indexOf("Teil 2") === -1 && prev.indexOf("Verhandlung") === -1;
  }

  function headerXpLabel() {
    if (isBaustein(q)) {
      return "⭐ " + (totalXp() + (run ? run.xp : 0)) + " XP gesamt";
    }
    return "⭐ " + (run ? run.xp : 0) + " XP";
  }

  function playHeader() {
    var step = run ? run.step : -1;
    var head = el("div", { class: "playhead" }, [
      el("button", { class: "btn ghost", type: "button", text: "← Übersicht", onclick: function () { renderAuswahl(); focusTop(); } }),
      el("span", { class: "headright" }, [
        el("span", { class: "xpcount", id: "xpcount", "aria-label": isBaustein(q) ? "XP gesamt" : "XP in diesem Fall", text: headerXpLabel() }),
        el("span", { class: "tag recht", text: q.fach })
      ])
    ]);
    var view = run && run.view;
    var endLabel = isZivilfall(q) ? "Ergebnis" : "Urteil";
    var label = view === "abschluss" || view === "reflexion" ? "Abschluss" : view === "urteil" || view === "ergebnis" || step >= q.schritte.length ? endLabel : step < 0 ? "Start" : "Schritt " + (step + 1) + " von " + q.schritte.length;
    var dots = el("div", { class: "dots", role: "img", "aria-label": label });
    q.schritte.forEach(function (_, i) {
      dots.appendChild(el("span", { class: "dot" + (step > i || step >= q.schritte.length ? " ok" : step === i ? " now" : "") }));
    });
    if (view === "urteil" || view === "ergebnis") return [head];
    return [head, el("h2", { text: q.titel }), dots];
  }

  function figureBlock(text) {
    var f = q.figur || {};
    var rolle = (typeof f.rolle === "string" && f.rolle.trim()) ? f.rolle.trim() : "";
    return el("div", { class: "figure fade" }, [
      el("div", { class: "figwho" }, [
        el("div", { class: "avatar", "aria-hidden": "true", style: "background:" + safeColor(f.farbe), text: f.emoji || "⚖️" }),
        (f.name || rolle) ? el("div", { class: "figtext" }, [
          f.name ? el("div", { class: "figname", text: f.name }) : null,
          rolle ? el("div", { class: "figrolle", text: rolle }) : null
        ]) : null
      ]),
      el("div", { class: "bubble" }, [el("p", { style: "margin:0", text: text })])
    ]);
  }

  function renderAuswahl() {
    q = null;
    run = null;
    clear(app);
    setAppView();
    app.appendChild(el("header", { class: "top" }, [
      el("h1", {}, [el("span", { class: "logo", "aria-hidden": "true", text: "⚖️ " }), "Rechts-Quest"])
    ]));
    var xpNow = totalXp();
    var ordenItems = allOrdenItems();
    var ordenGot = 0;
    ordenItems.forEach(function (it) { if (itemState(it.id).done && it.belohnung && it.belohnung.abzeichen) ordenGot++; });
    var ordenMax = 0;
    ordenItems.forEach(function (it) { if (it.belohnung && it.belohnung.abzeichen) ordenMax++; });
    app.appendChild(el("button", { class: "progress-chip", type: "button",
      "aria-label": "Mein Fortschritt: " + xpNow + " Erfahrungspunkte, " + ordenGot + " von " + ordenMax + " Orden",
      onclick: function () { renderFortschritt(); focusTop(); } }, [
      el("span", { text: "⭐ " + xpNow + " XP gesamt" }),
      el("span", { class: "chip-dot", "aria-hidden": "true", text: "·" }),
      el("span", { text: "🏅 Orden " + ordenGot + "/" + ordenMax })
    ]));
    app.appendChild(el("p", { class: "muted", text: "Wähle einen Lernfall. Es gilt österreichisches Recht." }));
    if (!faelle.length) app.appendChild(el("p", { class: "note", text: "Keine Fälle gefunden." }));
    var namen = GEBIETE.slice();
    faelle.forEach(function (f) { var g = gebietVon(f); if (namen.indexOf(g) === -1) namen.push(g); });
    namen.forEach(function (name, gi) {
      var inGebiet = faelle.filter(function (f) { return gebietVon(f) === name; });
      if (!inGebiet.length) return;
      var hid = "gebiet-" + gi;
      var list = el("div", { class: "list" });
      inGebiet.forEach(function (fall) { list.appendChild(fallKarte(fall)); });
      app.appendChild(el("section", { class: "gebiet", "aria-labelledby": hid }, [
        el("h2", { class: "gebiet-titel", id: hid, text: name + " (" + inGebiet.length + (inGebiet.length === 1 ? " Fall)" : " Fälle)") }),
        list
      ]));
    });
  }

  function fallKarte(fall) {
    var thumb = (BILDER[fall.id] || {}).start;
    var badge = fall.belohnung && fall.belohnung.abzeichen;
    return el("button", { class: "card fade", type: "button", onclick: function () { openFall(fall); },
      "aria-label": fall.titel + ", " + fall.fach + ", " + fall.klasse }, [
      thumb ? el("img", { class: "card-img", src: thumb.src, alt: "", "aria-hidden": "true", loading: "lazy", width: "1280", height: "720" }) : null,
      el("div", { class: "cardhead" }, [
        el("span", { class: "tag recht", text: fall.fach }),
        el("span", { class: "muted small", text: fall.klasse })
      ]),
      el("div", { class: "cardtitle", text: fall.titel }),
      el("div", { class: "cardmeta" }, [
        el("span", { text: fall.schritte.length + " Schritte · " + ((fall.belohnung && fall.belohnung.xp) || 0) + " XP" }),
        badge ? el("span", { text: badge.emoji + " " + badge.name }) : null
      ])
    ]);
  }

  function renderFortschritt() {
    var xp = totalXp();
    var info = levelInfo(xp);
    var pct = Math.round(info.inLevel / XP_PER_LEVEL * 100);
    var ordenItems = allOrdenItems();
    clear(app);
    setAppView();
    app.appendChild(el("div", { class: "playhead" }, [
      el("button", { class: "btn ghost", type: "button", text: "← Übersicht", onclick: function () { renderAuswahl(); focusTop(); } })
    ]));
    app.appendChild(el("h1", { text: "Mein Fortschritt" }));
    app.appendChild(el("section", { class: "levelbox fade", "aria-label": "Deine Erfahrungspunkte" }, [
      el("div", { class: "levelrow" }, [
        el("span", { class: "leveltitle", text: "Stufe " + info.level + " · " + info.title }),
        el("span", { class: "muted small", text: info.xp + " XP gesamt" })
      ]),
      el("div", { class: "bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(XP_PER_LEVEL),
        "aria-valuenow": String(info.inLevel), "aria-label": "Fortschritt bis zur nächsten Stufe" },
        [el("span", { style: "width:" + pct + "%" })]),
      el("p", { class: "muted small", style: "margin:6px 0 0", text: "Noch " + (XP_PER_LEVEL - info.inLevel) + " XP bis Stufe " + (info.level + 1) + "." })
    ]));
    if (!storageOk) app.appendChild(el("p", { class: "note", text: "Hinweis: Dein Fortschritt kann hier nicht gespeichert werden. Er bleibt nur, solange die Seite offen ist." }));

    app.appendChild(el("h2", { text: "Deine Fälle" }));
    var list = el("div", { class: "list fortschritt-liste" });
    faelle.concat(bausteine).forEach(function (fall) {
      var st = itemState(fall.id);
      var done = !!st.done;
      var art = isBaustein(fall) ? "Ergänzung" : "Fall";
      list.appendChild(el("div", { class: "card fortschritt-card" }, [
        el("div", { class: "cardhead" }, [
          el("span", { class: "tag recht", text: art }),
          el("span", { class: "status " + (done ? "done" : "neu"), text: done ? "✓ geschafft" : "offen" })
        ]),
        el("div", { class: "cardtitle", text: fall.titel }),
        el("div", { class: "cardmeta" }, [
          el("span", { text: done ? ("Bestes Ergebnis: " + (st.bestXp || 0) + " XP") : "Noch nicht gespielt" })
        ])
      ]));
    });
    app.appendChild(list);

    app.appendChild(el("h2", { text: "Deine Orden" }));
    var shelf = el("div", { class: "shelf", role: "list" });
    allOrdenItems().forEach(function (fall) {
      var b = fall.belohnung && fall.belohnung.abzeichen;
      if (!b) return;
      var got = !!itemState(fall.id).done;
      shelf.appendChild(el("div", { class: "badge" + (got ? "" : " locked"), role: "listitem",
        "aria-label": got ? ("Orden " + b.name + ", erhalten") : ("Orden " + b.name + ", noch nicht erhalten, in: " + fall.titel) }, [
        el("div", { class: "em", "aria-hidden": "true", text: got ? b.emoji : "?" }),
        el("div", { text: b.name }),
        got ? null : el("div", { class: "muted small", text: "In: " + fall.titel })
      ]));
    });
    app.appendChild(shelf);

    var confirmBox = el("div", { class: "panel", hidden: true, role: "alertdialog", "aria-labelledby": "rs-t" }, [
      el("p", { id: "rs-t", text: "Willst du deinen Fortschritt wirklich löschen? Alle XP und Orden sind dann weg." }),
      el("div", { class: "actions" }, [
        el("button", { class: "btn secondary", type: "button", text: "Abbrechen", onclick: function () { confirmBox.hidden = true; resetBtn.hidden = false; resetBtn.focus(); } }),
        el("button", { class: "btn danger", type: "button", text: "Ja, löschen", onclick: function () { resetProgress(); renderFortschritt(); focusTop(); } })
      ])
    ]);
    var resetBtn = el("button", { class: "btn ghost", type: "button", text: "Fortschritt zurücksetzen",
      onclick: function () { resetBtn.hidden = true; confirmBox.hidden = false; confirmBox.querySelector("button").focus(); } });
    app.appendChild(el("footer", {}, [
      resetBtn,
      confirmBox,
      el("p", { class: "muted small", text: "Dein Fortschritt bleibt nur auf diesem Gerät. Es gibt kein Konto und keine Rangliste." })
    ]));
  }

  function openFall(fall) {
    q = fall;
    run = { step: -1, xp: 0, stepXp: stepXpList(q), view: "start" };
    renderStart();
    focusTop();
  }

  function renderStart() {
    clear(app);
    setAppView();
    run.step = -1;
    run.view = "start";
    playHeader().forEach(function (n) { app.appendChild(n); });
    app.appendChild(el("p", { class: "muted small", text: q.fach + " · " + q.klasse + " · " + q.schritte.length + " Schritte" }));
    if (q.rechtsstand || (Array.isArray(q.hauptnormen) && q.hauptnormen.length)) {
      app.appendChild(el("p", { class: "muted small rechtsstand" }, [
        q.rechtsstand ? "Rechtsstand: " + q.rechtsstand : null,
        q.rechtsstand && q.hauptnormen && q.hauptnormen.length ? " · " : null,
        q.hauptnormen && q.hauptnormen.length ? "Hauptnormen: " + q.hauptnormen.join(", ") : null
      ]));
    }
    if (q.vorab_hinweis) {
      app.appendChild(el("div", { class: "notice", role: "note" }, [
        el("p", { style: "margin:0", text: q.vorab_hinweis })
      ]));
    }
    var startImg = sceneImage("start");
    if (startImg) app.appendChild(startImg);
    app.appendChild(figureBlock(q.einleitung));
    app.appendChild(el("button", { class: "btn block", type: "button", text: "Los geht's →", onclick: function () {
      run.step = 0;
      run.view = "step";
      renderStep();
      focusTop();
    } }));
  }

  function renderStep() {
    var s = q.schritte[run.step];
    var tries = 0, solved = false, reviewDone = !s.wiederholung;
    clear(app);
    setAppView("view-step");
    run.view = "step";
    playHeader().forEach(function (n) { app.appendChild(n); });
    if (s.abschnitt) app.appendChild(el("p", { class: "abschnitt", text: s.abschnitt }));
    if (isFirstVerhandlung(run.step)) {
      var vImg = sceneImage("verfahren") || sceneImage("verhandlung");
      if (vImg) app.appendChild(vImg);
    }
    app.appendChild(el("p", { class: "muted small", style: "margin:0 0 6px", text: "Schritt " + (run.step + 1) + " von " + q.schritte.length }));
    app.appendChild(figureBlock(s.text));

    var feedback = el("div", { class: "feedback", role: "status", "aria-live": "polite" });
    var hintBox = el("div", { class: "hint", hidden: true });
    var options = el("div", { class: "options", role: "group", "aria-label": "Antworten" });
    var theoryWrap = el("div", { hidden: true });
    var nextLabel = run.step + 1 < q.schritte.length ? "Weiter →" : (isBaustein(q) ? "Zum Abschluss →" : (isZivilfall(q) ? "Zum Ergebnis →" : "Zum Urteil →"));
    function goNext() {
      run.step++;
      if (run.step < q.schritte.length) renderStep();
      else if (isBaustein(q)) renderAbschluss();
      else renderEndkarte();
      focusTop();
    }
    var nextBtn = el("button", { class: "btn", type: "button", hidden: true, text: nextLabel, onclick: goNext });
    var nextFloat = el("button", { class: "btn next-float", type: "button", hidden: true, text: "Weiter →", "aria-label": nextLabel, onclick: goNext });
    var xpPill = el("span", { class: "xppill", "aria-hidden": "true", hidden: true });
    var hintBtn = s.hinweis ? el("button", { class: "btn secondary", type: "button", text: "💡 Hinweis",
      onclick: function () { hintBox.textContent = "💡 " + s.hinweis; hintBox.hidden = false; hintBtn.hidden = true; } }) : null;
    var actions = el("div", { class: "actions step-actions" + (hintBtn ? " is-active" : "") }, [hintBtn || el("span"), el("span", { class: "nextwrap" }, [xpPill, nextBtn])]);
    if (hintBtn) app.classList.add("has-step-actions");
    function revealNext() {
      nextBtn.hidden = false;
      nextFloat.hidden = false;
      actions.classList.add("is-active");
      app.classList.add("has-step-actions");
      watchNextFloat(nextFloat);
      try { nextBtn.focus({ preventScroll: true }); } catch (e) { nextBtn.focus(); }
    }

    function setMainDisabled(dis) {
      Array.prototype.forEach.call(options.querySelectorAll("button"), function (x) {
        if (x.classList.contains("wrong") || solved) { x.disabled = true; return; }
        x.disabled = dis;
        if (dis) x.setAttribute("aria-disabled", "true");
        else x.removeAttribute("aria-disabled");
      });
    }

    function showTheoryThenReview() {
      if (!s.theorie && !s.wiederholung) return;
      theoryWrap.hidden = false;
      clear(theoryWrap);
      if (s.theorie) {
        theoryWrap.appendChild(el("div", { class: "theorie" }, [
          el("h3", { text: "Theorie" }),
          el("p", { style: "margin:0", text: s.theorie })
        ]));
      }
      if (s.wiederholung) {
        var w = s.wiederholung;
        var wFb = el("div", { class: "feedback", role: "status", "aria-live": "polite" });
        var wOpts = el("div", { class: "options", role: "group", "aria-label": "Wiederholung" });
        theoryWrap.appendChild(el("div", { class: "wiederholung" }, [
          el("h3", { text: "Wiederholung" }),
          el("p", { text: w.frage }),
          wOpts,
          wFb
        ]));
        shuffle(w.optionen).forEach(function (opt) {
          var b = el("button", { class: "opt", type: "button" }, [opt.text]);
          b.addEventListener("click", function () {
            if (reviewDone) return;
            if (opt.richtig) {
              reviewDone = true;
              b.classList.add("right");
              b.insertBefore(el("span", { class: "mark", "aria-hidden": "true", text: "✓" }), b.firstChild);
              Array.prototype.forEach.call(wOpts.querySelectorAll("button"), function (x) { x.disabled = true; });
              wFb.className = "feedback ok";
              wFb.textContent = "✓ Richtig. Versuch die Ausgangsfrage noch einmal.";
              setMainDisabled(false);
            } else {
              b.classList.add("wrong");
              b.disabled = true;
              b.insertBefore(el("span", { class: "mark", "aria-hidden": "true", text: "↺" }), b.firstChild);
              wFb.className = "feedback warn";
              wFb.textContent = "↺ Noch nicht. Versuch es nochmal.";
            }
          });
          wOpts.appendChild(b);
        });
        setMainDisabled(true);
      }
      try { theoryWrap.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
    }

    shuffle(s.optionen).forEach(function (opt) {
      var b = el("button", { class: "opt", type: "button" }, [opt.text]);
      b.addEventListener("click", function () {
        if (solved) return;
        if (s.wiederholung && !reviewDone && tries > 0) return;
        tries++;
        if (opt.richtig) {
          solved = true;
          var gained = stepGain(run.stepXp[run.step], tries);
          run.xp += gained;
          b.classList.add("right");
          b.insertBefore(el("span", { class: "mark", "aria-hidden": "true", text: "✓" }), b.firstChild);
          xpPill.textContent = "+" + gained + " XP";
          xpPill.hidden = false;
          var cnt = document.getElementById("xpcount");
          if (cnt) cnt.textContent = headerXpLabel();
          setMainDisabled(true);
          feedback.className = "feedback ok";
          feedback.textContent = "✓ " + (opt.feedback || "Richtig!") + " (+" + gained + " XP)";
          if (hintBtn) hintBtn.hidden = true;
          revealNext();
        } else {
          b.classList.add("wrong");
          b.disabled = true;
          b.insertBefore(el("span", { class: "mark", "aria-hidden": "true", text: "↺" }), b.firstChild);
          feedback.className = "feedback warn";
          feedback.textContent = "↺ " + (opt.feedback || "Noch nicht ganz.") + " Versuch es nochmal (dann gibt es die halben XP).";
          if (!reviewDone || !s.wiederholung) showTheoryThenReview();
        }
      });
      options.appendChild(b);
    });

    app.appendChild(options);
    app.appendChild(hintBox);
    app.appendChild(feedback);
    app.appendChild(theoryWrap);
    app.appendChild(actions);
    app.appendChild(nextFloat);
  }

  function fitUrteil() {
    var strip = app.querySelector(".quest-img-strip");
    var panel = app.querySelector(".panel.urteil");
    var rv = app.querySelector(".rechtsvergleich");
    var heights = [119, 100, 84, 68, 52];
    var i;
    if (strip) {
      for (i = 0; i < heights.length && overflowPx() > 1; i++) {
        strip.style.maxHeight = heights[i] + "px";
        strip.style.aspectRatio = "3 / 1";
      }
    }
    var fonts = ["0.98rem", "0.95rem", "0.92rem"];
    for (i = 0; i < fonts.length && overflowPx() > 1; i++) {
      if (panel) panel.style.fontSize = fonts[i];
    }
    if (rv && overflowPx() > 1 && rv.tagName !== "DETAILS") {
      var raw = rv.textContent;
      var details = el("details", { class: "rechtsvergleich" }, [
        el("summary", { text: "Hinweis zum Rechtsvergleich" }),
        el("p", { style: "margin:8px 0 0", text: raw })
      ]);
      rv.parentNode.replaceChild(details, rv);
    }
  }

  function renderEndkarte() {
    if (isZivilfall(q)) renderErgebnis();
    else renderUrteil();
  }

  function renderUrteil() {
    var u = q.urteil || {};
    var reasons = el("ul", { class: "begruendung" });
    (u.begruendung || []).forEach(function (t) { reasons.appendChild(el("li", { text: t })); });

    clear(app);
    setAppView("view-urteil");
    run.step = q.schritte.length;
    if (run && q) recordProgress(q, run.xp);
    run.view = "urteil";
    playHeader().forEach(function (n) { app.appendChild(n); });

    var rvBox = null;
    if (q.hinweis_rechtsvergleich && String(q.hinweis_rechtsvergleich).trim()) {
      rvBox = el("div", { class: "rechtsvergleich", role: "note" }, [
        el("p", { style: "margin:0", text: q.hinweis_rechtsvergleich })
      ]);
    }

    app.appendChild(el("section", { class: "fade", "aria-labelledby": "urt-h" }, [
      el("h2", { id: "urt-h", text: "Urteil" }),
      sceneImage("urteil"),
      el("div", { class: "panel urteil" }, [
        u.spruch ? el("p", { class: "spruch", text: u.spruch }) : null,
        u.strafe ? el("p", { class: "strafe", text: u.strafe }) : null,
        reasons
      ]),
      rvBox,
      el("div", { class: "actions end-actions" }, (function () {
        var buttons = [];
        var b21 = bausteinForFall(q);
        if (b21) {
          buttons.push(el("button", { class: "btn secondary block", type: "button", text: "Was wäre, wenn …?", onclick: function () { openFall(b21); } }));
        }
        buttons.push(el("button", { class: "btn block", type: "button", text: "Weiter zum Abschluss →", onclick: function () { renderAbschluss(); focusTop(); } }));
        return buttons;
      })())
    ]));
    fitUrteil();
  }

  function renderErgebnis() {
    var e = q.ergebnis || {};
    var reasons = el("ul", { class: "begruendung" });
    (e.begruendung || []).forEach(function (t) { reasons.appendChild(el("li", { text: t })); });

    clear(app);
    setAppView("view-urteil", "view-ergebnis");
    run.step = q.schritte.length;
    if (run && q) recordProgress(q, run.xp);
    run.view = "ergebnis";
    playHeader().forEach(function (n) { app.appendChild(n); });

    var titel = "Ergebnis" + (e.art ? ": " + e.art : "");
    app.appendChild(el("section", { class: "fade", "aria-labelledby": "erg-h" }, [
      el("h2", { id: "erg-h", class: "ergebnis-titel", text: titel }),
      sceneImage("ergebnis") || sceneImage("urteil"),
      el("div", { class: "panel urteil" }, [
        e.inhalt ? el("p", { class: "ergebnis-inhalt", text: e.inhalt }) : null,
        reasons
      ]),
      el("div", { class: "actions" }, [
        el("button", { class: "btn block", type: "button", text: "Weiter zum Abschluss →", onclick: function () { renderAbschluss(); focusTop(); } })
      ])
    ]));
    fitUrteil();
  }

  function renderAbschluss() {
    var badge = q.belohnung && q.belohnung.abzeichen;
    var quellen = Array.isArray(q.quellen) && q.quellen.length ? "Quellen: " + q.quellen.join("; ") + "." : "";
    var stand = q.rechtsstand ? " Rechtsstand: " + q.rechtsstand + "." : (q.stand ? " Stand: " + formatDate(q.stand) + "." : "");
    var hasRefl = q.reflexion && q.reflexion.optional;

    if (run && q) recordProgress(q, run.xp);
    clear(app);
    setAppView();
    run.view = "abschluss";
    playHeader().forEach(function (n) { app.appendChild(n); });

    app.appendChild(el("section", { class: "finish fade", "aria-labelledby": "fin-h" }, [
      el("h2", { id: "fin-h", text: "Fall geschafft" }),
      badge ? el("div", { class: "reveal", "aria-hidden": "true", text: badge.emoji }) : null,
      badge ? el("p", {}, [el("strong", { text: "Abzeichen: " + badge.name })]) : null,
      el("div", { class: "xpgain", text: "+" + run.xp + " XP" }),
      el("div", { class: "panel" }, [
        el("p", { text: q.abschluss }),
        (quellen || stand) ? el("p", { class: "sources", style: "margin:0", text: (quellen + stand).trim() }) : null
      ]),
      el("div", { class: "actions" }, [
        hasRefl ? el("button", { class: "btn", type: "button", text: "Zur Reflexion →", onclick: function () { renderReflexion(); focusTop(); } }) : null,
        hasRefl ? el("button", { class: "btn secondary", type: "button", text: "Zur Übersicht", onclick: function () { renderAuswahl(); focusTop(); } }) : el("button", { class: "btn", type: "button", text: "Zur Übersicht", onclick: function () { renderAuswahl(); focusTop(); } })
      ])
    ]));
  }

  function renderReflexion() {
    var r = q.reflexion || {};
    var list = el("ol", { class: "reflexion-fragen" });
    (r.fragen || []).forEach(function (f) { list.appendChild(el("li", { text: f })); });
    clear(app);
    setAppView();
    run.view = "reflexion";
    playHeader().forEach(function (n) { app.appendChild(n); });
    app.appendChild(el("section", { class: "fade" }, [
      el("h2", { text: r.titel || "Reflexion" }),
      el("p", { class: "muted", text: "Freiwillig, ohne Bewertung und ohne XP. Zum Diskutieren." }),
      list,
      el("div", { class: "actions" }, [
        el("button", { class: "btn secondary", type: "button", text: "Überspringen", onclick: function () { renderAuswahl(); focusTop(); } }),
        el("button", { class: "btn", type: "button", text: "Fertig", onclick: function () { renderAuswahl(); focusTop(); } })
      ])
    ]));
  }

  if (!faelle.length) {
    app.appendChild(el("p", { class: "note", text: "Fall-Daten fehlen." }));
    return;
  }
  renderAuswahl();
})();
