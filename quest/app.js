/* Rechts-Quest Fall 1 – lokale Text-App. Keine Netzwerkzugriffe, kein Tracking. */
(function () {
  "use strict";

  var q = window.FALL;
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

  var run = null;

  /* Bildzuordnung nur im Prototyp, nicht in der Fall-JSON. */
  var BILDER = {
    start: { src: "bilder/fall1_lokal.jpg", alt: "Ein wütender Gast sitzt in einem Wiener Lokal. Vor ihm stehen Saft, Kaffee und Bier. Ein Kellner mit Tablett schaut besorgt." },
    verhandlung: { src: "bilder/fall1_verhandlung.jpg", alt: "Ein Gerichtssaal: Die Richterin sitzt in der Mitte, der Angeklagte steht am Pult, Anklage und Verteidigung sitzen seitlich, Geschworene auf der Bank." },
    urteil: { src: "bilder/fall1_urteil_v2.jpg", alt: "Die Richterin steht hinter der Richterbank und liest das Urteil vor. Links und rechts sitzen Beisitzer, an der Wand ein Kreuz und der österreichische Adler.", cls: "quest-img quest-img-strip" }
  };
  function sceneImage(key) {
    var b = BILDER[key];
    if (!b) return null;
    return el("img", { class: b.cls || "quest-img", src: b.src, alt: b.alt, loading: "lazy", width: "1280", height: b.cls && b.cls.indexOf("strip") >= 0 ? "427" : "720" });
  }
  function isFirstVerhandlung(i) {
    var s = q.schritte[i];
    if (!s || !s.abschnitt) return false;
    if (s.abschnitt.indexOf("Teil 2") === -1 && s.abschnitt.indexOf("Verhandlung") === -1) return false;
    if (i === 0) return true;
    var prev = q.schritte[i - 1].abschnitt || "";
    return prev.indexOf("Teil 2") === -1 && prev.indexOf("Verhandlung") === -1;
  }


  function playHeader() {
    var step = run ? run.step : -1;
    var head = el("div", { class: "playhead" }, [
      el("button", { class: "btn ghost", type: "button", text: "← Start", onclick: function () { renderStart(); focusTop(); } }),
      el("span", { class: "headright" }, [
        el("span", { class: "xpcount", id: "xpcount", "aria-label": "XP in diesem Fall", text: "⭐ " + (run ? run.xp : 0) + " XP" }),
        el("span", { class: "tag recht", text: q.fach })
      ])
    ]);
    var view = run && run.view;
    var label = view === "abschluss" || view === "reflexion" ? "Abschluss" : view === "urteil" || step >= q.schritte.length ? "Urteil" : step < 0 ? "Start" : "Schritt " + (step + 1) + " von " + q.schritte.length;
    var dots = el("div", { class: "dots", role: "img", "aria-label": label });
    q.schritte.forEach(function (_, i) {
      dots.appendChild(el("span", { class: "dot" + (step > i || step >= q.schritte.length ? " ok" : step === i ? " now" : "") }));
    });
    if (view === "urteil") return [head];
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

  function renderStart() {
    run = null;
    clear(app);
    app.appendChild(el("header", { class: "top" }, [
      el("h1", {}, [el("span", { class: "logo", "aria-hidden": "true", text: "⚖️ " }), q.titel])
    ]));
    app.appendChild(el("p", { class: "muted small", text: q.fach + " · " + q.klasse + " · " + q.schritte.length + " Schritte" }));
    app.appendChild(el("div", { class: "notice", role: "note" }, [
      el("p", { style: "margin:0", text: q.vorab_hinweis })
    ]));
    app.appendChild(sceneImage("start"));
    app.appendChild(figureBlock(q.einleitung));
    app.appendChild(el("button", { class: "btn block", type: "button", text: "Los geht's →", onclick: function () {
      run = { step: 0, xp: 0, stepXp: stepXpList(q) };
      renderStep();
      focusTop();
    } }));
  }

  function renderStep() {
    var s = q.schritte[run.step];
    var tries = 0, solved = false, reviewDone = !s.wiederholung;
    clear(app);
    playHeader().forEach(function (n) { app.appendChild(n); });
    if (s.abschnitt) app.appendChild(el("p", { class: "abschnitt", text: s.abschnitt }));
    if (isFirstVerhandlung(run.step)) app.appendChild(sceneImage("verhandlung"));
    app.appendChild(el("p", { class: "muted small", style: "margin:0 0 6px", text: "Schritt " + (run.step + 1) + " von " + q.schritte.length }));
    app.appendChild(figureBlock(s.text));

    var feedback = el("div", { class: "feedback", role: "status", "aria-live": "polite" });
    var hintBox = el("div", { class: "hint", hidden: true });
    var options = el("div", { class: "options", role: "group", "aria-label": "Antworten" });
    var theoryWrap = el("div", { hidden: true });
    var nextBtn = el("button", { class: "btn", type: "button", hidden: true,
      text: run.step + 1 < q.schritte.length ? "Weiter →" : "Zum Urteil →",
      onclick: function () {
        run.step++;
        if (run.step < q.schritte.length) renderStep();
        else renderUrteil();
        focusTop();
      } });
    var xpPill = el("span", { class: "xppill", "aria-hidden": "true", hidden: true });
    var hintBtn = s.hinweis ? el("button", { class: "btn secondary", type: "button", text: "💡 Hinweis",
      onclick: function () { hintBox.textContent = "💡 " + s.hinweis; hintBox.hidden = false; hintBtn.hidden = true; } }) : null;

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
          if (cnt) cnt.textContent = "⭐ " + run.xp + " XP";
          setMainDisabled(true);
          feedback.className = "feedback ok";
          feedback.textContent = "✓ " + (opt.feedback || "Richtig!") + " (+" + gained + " XP)";
          if (hintBtn) hintBtn.hidden = true;
          nextBtn.hidden = false;
          nextBtn.focus();
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
    app.appendChild(el("div", { class: "actions" }, [hintBtn || el("span"), el("span", { class: "nextwrap" }, [xpPill, nextBtn])]));
  }

  function renderUrteil() {
    var u = q.urteil || {};
    var reasons = el("ul", { class: "begruendung" });
    (u.begruendung || []).forEach(function (t) { reasons.appendChild(el("li", { text: t })); });

    clear(app);
    app.classList.add("view-urteil");
    run.step = q.schritte.length;
    run.view = "urteil";
    playHeader().forEach(function (n) { app.appendChild(n); });

    app.appendChild(el("section", { class: "fade", "aria-labelledby": "urt-h" }, [
      el("h2", { id: "urt-h", text: "Urteil" }),
      sceneImage("urteil"),
      el("div", { class: "panel urteil" }, [
        u.spruch ? el("p", { class: "spruch", text: u.spruch }) : null,
        u.strafe ? el("p", { class: "strafe", text: u.strafe }) : null,
        reasons
      ]),
      q.hinweis_rechtsvergleich ? el("div", { class: "rechtsvergleich", role: "note" }, [
        el("p", { style: "margin:0", text: q.hinweis_rechtsvergleich })
      ]) : null,
      el("div", { class: "actions" }, [
        el("button", { class: "btn block", type: "button", text: "Weiter zum Abschluss →", onclick: function () { renderAbschluss(); focusTop(); } })
      ])
    ]));
  }

  function renderAbschluss() {
    var badge = q.belohnung && q.belohnung.abzeichen;
    var quellen = Array.isArray(q.quellen) && q.quellen.length ? "Quellen: " + q.quellen.join("; ") + "." : "";
    var stand = q.stand ? " Stand: " + formatDate(q.stand) + "." : "";
    var hasRefl = q.reflexion && q.reflexion.optional;

    clear(app);
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
        hasRefl ? el("button", { class: "btn secondary", type: "button", text: "Überspringen", onclick: function () { renderStart(); focusTop(); } }) : el("button", { class: "btn", type: "button", text: "Zum Start", onclick: function () { renderStart(); focusTop(); } })
      ])
    ]));
  }

  function renderReflexion() {
    var r = q.reflexion || {};
    var list = el("ol", { class: "reflexion-fragen" });
    (r.fragen || []).forEach(function (f) { list.appendChild(el("li", { text: f })); });
    clear(app);
    app.classList.remove("view-urteil");
    run.view = "reflexion";
    playHeader().forEach(function (n) { app.appendChild(n); });
    app.appendChild(el("section", { class: "fade" }, [
      el("h2", { text: r.titel || "Reflexion" }),
      el("p", { class: "muted", text: "Freiwillig, ohne Bewertung und ohne XP. Zum Diskutieren." }),
      list,
      el("div", { class: "actions" }, [
        el("button", { class: "btn secondary", type: "button", text: "Überspringen", onclick: function () { renderStart(); focusTop(); } }),
        el("button", { class: "btn", type: "button", text: "Fertig", onclick: function () { renderStart(); focusTop(); } })
      ])
    ]));
  }

  if (!q || !Array.isArray(q.schritte)) {
    app.appendChild(el("p", { class: "note", text: "Fall-Daten fehlen." }));
    return;
  }
  renderStart();
})();
