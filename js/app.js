(function () {
  const ICONS = {
    richtig:
      '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.6 14.2 3.8 10.4l1.4-1.4 2.4 2.4 7-7.2 1.4 1.4z"/></svg>',
    uebersehen:
      '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4c4.2 0 7.6 3.1 8.7 6-1.1 2.9-4.5 6-8.7 6s-7.6-3.1-8.7-6C2.4 7.1 5.8 4 10 4zm0 2.2A3.8 3.8 0 1 0 10 14a3.8 3.8 0 0 0 0-7.8zm0 2A1.8 1.8 0 1 1 10 12a1.8 1.8 0 0 1 0-3.6z"/></svg>',
    falsch:
      '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.3 4 10 8.7 14.7 4 16 5.3 11.3 10 16 14.7 14.7 16 10 11.3 5.3 16 4 14.7 8.7 10 4 5.3z"/></svg>'
  };
  const LABELS = {
    richtig: "Richtig subsumiert",
    uebersehen: "Übersehen",
    falsch: "Falsch"
  };
  const PLAY_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  let fall = null;
  let basisUrl = "";
  let app = null;
  let gebunden = false;
  let popstateGebunden = false;

  const state = {
    view: "start",
    i: 0,
    wahl: null,
    wwahl: null,
    antworten: []
  };

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setBasis(rel) {
    const raw = new URL(rel || "./", location.href).href;
    basisUrl = raw.endsWith("/") ? raw : raw + "/";
  }

  function mediaUrl(rel) {
    return new URL(rel, basisUrl || location.href).href;
  }

  function stickyBtn(action, label) {
    return (
      '<div class="sticky"><div class="inner">' +
      '<button type="button" class="btn primary block" data-action="' +
      action +
      '">' +
      label +
      "</button></div></div>"
    );
  }

  function timeline(current) {
    const n = fall.stationen.length;
    return (
      '<ol class="timeline" aria-label="Stationen">' +
      fall.stationen
        .map((s, i) => {
          const cls = i < current ? "done" : i === current ? "now" : "";
          const status =
            i < current ? "erledigt" : i === current ? "aktuell" : "offen";
          return (
            '<li class="tl-step ' +
            cls +
            '">' +
            '<span class="tl-dot" aria-hidden="true">' +
            (i < current ? "✓" : i + 1) +
            "</span>" +
            '<span class="tl-label">' +
            escapeHtml(s.kurzname || s.station) +
            "</span>" +
            '<span class="visually-hidden">Station ' +
            (i + 1) +
            " von " +
            n +
            ", " +
            escapeHtml(s.station) +
            ", " +
            status +
            "</span>" +
            "</li>"
          );
        })
        .join("") +
      "</ol>"
    );
  }

  function startMeta() {
    const teile = [];
    if (fall.gebiet && fall.thema) teile.push(fall.gebiet + " › " + fall.thema);
    else if (fall.rechtsgebiet) teile.push(fall.rechtsgebiet);
    teile.push(fall.stationen.length + " Stationen");
    return teile.join(" · ");
  }

  function setKopf(backHref) {
    const wrap = document.querySelector("header.top .wrap");
    if (!wrap) return;
    const back = backHref
      ? '<a class="back" href="' + escapeHtml(backHref) + '">← Übersicht</a>'
      : "";
    wrap.innerHTML =
      "<div>" +
      back +
      "<h1>Rechtsfälle</h1>" +
      '<p class="sub">profmasar.at</p></div>' +
      '<span class="badge" id="kennzeichen">' +
      escapeHtml(fall.kennung || "Fall") +
      "</span>";
    document.title = (fall.titel || "Rechtsfälle") + " – Rechtsfälle";
  }

  function resetState() {
    state.view = "station";
    state.i = 0;
    state.wahl = null;
    state.wwahl = null;
    state.antworten = [];
  }

  function renderStart() {
    app.id = "start";
    app.replaceChildren(
      el(
        '<section class="card start-card">' +
          '<span class="badge">' +
          escapeHtml(fall.kennung) +
          "</span>" +
          "<h2>" +
          escapeHtml(fall.titel) +
          "</h2>" +
          '<p class="start-meta">' +
          escapeHtml(startMeta()) +
          "</p>" +
          "<p>" +
          escapeHtml(fall.kurzbeschreibung) +
          "</p>" +
          '<button type="button" class="btn primary block" data-action="start">Starten</button>' +
          "</section>"
      )
    );
  }

  function posterPfad(video) {
    return String(video).replace(/\.mp4$/i, "_poster.jpg");
  }

  function videoBlock(s) {
    if (!s.video) return "";
    const src = escapeHtml(mediaUrl(s.video));
    const poster = escapeHtml(mediaUrl(posterPfad(s.video)));
    return (
      '<div class="station-video">' +
      '<video class="station-player" playsinline webkit-playsinline controls preload="metadata"' +
      ' poster="' +
      poster +
      '" src="' +
      src +
      '" aria-label="Kurzvideo zur Situation"></video>' +
      '<button type="button" class="video-play" hidden aria-label="Video abspielen">' +
      '<span class="video-play-icon">' +
      PLAY_ICON +
      "</span></button></div>"
    );
  }

  function entsperreTon() {
    if (!fall || !fall.stationen) return;
    fall.stationen.forEach(function (s) {
      if (!s.video) return;
      const v = document.createElement("video");
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      v.preload = "auto";
      v.muted = false;
      v.src = mediaUrl(s.video);
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(function () {
          try {
            v.pause();
            v.currentTime = 0;
          } catch (err) {}
        }).catch(function () {});
      }
    });
  }

  function playTaste(verstecken) {
    const btn = app.querySelector(".video-play");
    if (!btn) return;
    btn.hidden = !!verstecken;
  }

  function playStationVideo() {
    const v = app.querySelector("video.station-player");
    if (!v) return;
    v.muted = false;
    v.loop = false;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    function hidePlay() {
      playTaste(true);
    }
    v.addEventListener("playing", hidePlay);
    v.addEventListener("play", hidePlay);

    function tryPlay() {
      try {
        const p = v.play();
        if (p && typeof p.then === "function") {
          p.then(hidePlay).catch(function () {
            v.muted = false;
            playTaste(false);
          });
        }
      } catch (err) {
        v.muted = false;
        playTaste(false);
      }
    }
    tryPlay();
  }

  function renderStation() {
    const s = fall.stationen[state.i];
    const n = fall.stationen.length;
    app.id = "station";
    const buttons = s.buttons
      .map(
        (b) =>
          '<button type="button" class="btn wahl" data-id="' +
          escapeHtml(b.id) +
          '" data-bewertung="' +
          escapeHtml(b.bewertung) +
          '"><span class="wahl-mark" aria-hidden="true"></span><span class="wahl-text">' +
          escapeHtml(b.label) +
          "</span></button>"
      )
      .join("");
    app.replaceChildren(
      el(
        timeline(state.i) +
          '<p class="kicker">Station ' +
          (state.i + 1) +
          " von " +
          n +
          "</p>" +
          "<h2>" +
          escapeHtml(s.station) +
          "</h2>" +
          videoBlock(s) +
          '<section class="card"><p style="margin:0">' +
          escapeHtml(s.situationstext) +
          "</p></section>" +
          '<p class="prompt">Was trifft zu?</p>' +
          '<div class="btns">' +
          buttons +
          "</div>"
      )
    );
    playStationVideo();
  }

  function folgeKarte(bewertung, text, id) {
    return (
      '<section class="card folge ' +
      bewertung +
      '" id="' +
      id +
      '">' +
      '<div class="folge-icon">' +
      ICONS[bewertung] +
      "</div>" +
      "<div>" +
      '<p class="folge-label">' +
      LABELS[bewertung] +
      "</p>" +
      '<p class="folge-text">' +
      escapeHtml(text) +
      "</p>" +
      "</div></section>"
    );
  }

  function renderFolge() {
    const s = fall.stationen[state.i];
    const w = state.wahl;
    const n = fall.stationen.length;
    app.id = "folge";
    let extra = "";
    let action, actionLabel;
    if (w.bewertung === "falsch" && w.theorie && w.wiederholung) {
      extra =
        '<section class="card theorie" id="theorie"><h3>Kurz erklärt</h3><p style="margin:0">' +
        escapeHtml(w.theorie) +
        "</p></section>";
      action = "zur-wiederholung";
      actionLabel = "Zur Wiederholungsfrage";
    } else {
      action = state.i + 1 < n ? "weiter" : "dashboard";
      actionLabel = state.i + 1 < n ? "Nächste Station" : "Zum Dashboard";
    }
    app.replaceChildren(
      el(
        timeline(state.i) +
          '<p class="kicker">Station ' +
          (state.i + 1) +
          " von " +
          n +
          " · " +
          escapeHtml(s.station) +
          "</p>" +
          folgeKarte(w.bewertung, w.konsequenz, "konsequenz") +
          extra +
          stickyBtn(action, actionLabel)
      )
    );
  }

  function renderWiederholung() {
    const s = fall.stationen[state.i];
    const w = state.wahl.wiederholung;
    app.id = "wiederholung";
    let body;
    if (!state.wwahl) {
      const buttons = w.buttons
        .map(
          (b) =>
            '<button type="button" class="btn wahl" data-wid="' +
            escapeHtml(b.id) +
            '"><span class="wahl-mark" aria-hidden="true"></span><span class="wahl-text">' +
            escapeHtml(b.label) +
            "</span></button>"
        )
        .join("");
      body =
        '<section class="card"><p class="prompt" style="margin-top:0">Wiederholung</p><p style="margin:0">' +
        escapeHtml(w.frage) +
        "</p></section>" +
        '<div class="btns">' +
        buttons +
        "</div>";
    } else {
      const n = fall.stationen.length;
      const bewertung = state.wwahl.richtig ? "richtig" : "falsch";
      const action = state.i + 1 < n ? "weiter" : "dashboard";
      const actionLabel = state.i + 1 < n ? "Nächste Station" : "Zum Dashboard";
      body =
        folgeKarte(bewertung, state.wwahl.konsequenz, "w-konsequenz") +
        stickyBtn(action, actionLabel);
    }
    app.replaceChildren(
      el(
        timeline(state.i) +
          '<p class="kicker">Station ' +
          (state.i + 1) +
          " von " +
          fall.stationen.length +
          " · " +
          escapeHtml(s.station) +
          "</p>" +
          body
      )
    );
  }

  function renderDashboard() {
    app.id = "dashboard";
    const counts = { richtig: 0, uebersehen: 0, falsch: 0 };
    state.antworten.forEach((a) => {
      counts[a.bewertung] += 1;
    });
    const pills =
      '<div class="dash-sum" aria-label="Auswertung">' +
      ["richtig", "uebersehen", "falsch"]
        .map(
          (k) =>
            '<div class="dash-pill ' +
            k +
            '"><strong>' +
            counts[k] +
            "</strong><span>" +
            LABELS[k] +
            "</span></div>"
        )
        .join("") +
      "</div>";
    const rows = state.antworten
      .map((a, i) => {
        const s = fall.stationen[i];
        const zeile = s.dashboard_zeile;
        return (
          '<article class="dash-row ' +
          a.bewertung +
          '">' +
          '<div class="dash-mark" aria-hidden="true">' +
          ICONS[a.bewertung] +
          "</div><div>" +
          '<p class="dash-tag">' +
          LABELS[a.bewertung] +
          "</p>" +
          '<p class="dash-thema">Station ' +
          (i + 1) +
          ": " +
          escapeHtml(zeile.thema) +
          "</p>" +
          '<p class="dash-text">' +
          escapeHtml(zeile[a.bewertung]) +
          "</p>" +
          "</div></article>"
        );
      })
      .join("");
    app.replaceChildren(
      el(
        '<section class="card" id="dashboard-karte">' +
          "<h2>Dein Dashboard</h2>" +
          '<p class="legende">Jede Bewertung mit Farbe, Symbol und Text.</p>' +
          pills +
          rows +
          "</section>" +
          stickyBtn("neu", "Nochmal üben")
      )
    );
  }

  function render() {
    if (state.view === "start") renderStart();
    else if (state.view === "station") renderStation();
    else if (state.view === "folge") renderFolge();
    else if (state.view === "wiederholung") renderWiederholung();
    else renderDashboard();
    app.classList.toggle("has-sticky", !!app.querySelector(".sticky"));
    window.scrollTo(0, 0);
  }

  function starteStationen() {
    entsperreTon();
    resetState();
    render();
  }

  function waehle(id) {
    const s = fall.stationen[state.i];
    const w = s.buttons.find((b) => b.id === id);
    if (!w) return;
    state.wahl = w;
    state.antworten[state.i] = { bewertung: w.bewertung };
    state.view = "folge";
    render();
  }

  function waehleWiederholung(id) {
    const w = state.wahl.wiederholung.buttons.find((b) => b.id === id);
    if (!w) return;
    state.wwahl = w;
    state.antworten[state.i].wiederholungRichtig = !!w.richtig;
    render();
  }

  function weiter() {
    state.i += 1;
    state.wahl = null;
    state.wwahl = null;
    state.view = "station";
    render();
  }

  function bindEvents() {
    if (gebunden || !app) return;
    gebunden = true;
    app.addEventListener("click", function (e) {
      const playBtn = e.target.closest(".video-play");
      if (playBtn) {
        const v = app.querySelector("video.station-player");
        if (v) {
          v.muted = false;
          const p = v.play();
          if (p && typeof p.then === "function") {
            p.then(function () {
              playBtn.hidden = true;
            }).catch(function () {
              v.muted = false;
              playBtn.hidden = false;
            });
          }
        }
        return;
      }
      const startBtn = e.target.closest("[data-action]");
      if (startBtn) {
        const a = startBtn.getAttribute("data-action");
        if (a === "start" || a === "neu") {
          starteStationen();
        } else if (a === "zur-wiederholung") {
          state.wwahl = null;
          state.view = "wiederholung";
          render();
        } else if (a === "weiter") {
          weiter();
        } else if (a === "dashboard") {
          state.view = "dashboard";
          render();
        }
        return;
      }
      const wahl = e.target.closest("button.wahl[data-id]");
      if (wahl && state.view === "station") {
        waehle(wahl.getAttribute("data-id"));
        return;
      }
      const ww = e.target.closest("button.wahl[data-wid]");
      if (ww && state.view === "wiederholung") {
        waehleWiederholung(ww.getAttribute("data-wid"));
      }
    });
  }

  function start(opts) {
    opts = opts || {};
    fall = opts.fall;
    app = document.getElementById("app");
    if (!fall || !app) return;
    setBasis(opts.basis);
    if (opts.url) {
      const ziel = new URL(opts.url, location.href);
      history.pushState({ seite: "fall" }, "", ziel);
      if (!popstateGebunden) {
        popstateGebunden = true;
        window.addEventListener("popstate", function () {
          location.reload();
        });
      }
    }
    if (opts.kopf !== false) {
      setKopf(opts.backHref || "../../");
    }
    bindEvents();
    if (opts.sofort) {
      starteStationen();
    } else {
      state.view = "start";
      render();
    }
  }

  window.Rechtsfaelle = { start: start };

  if (document.body && document.body.getAttribute("data-rolle") === "fall") {
    start({
      fall: window.RECHTSFALL,
      basis: "./",
      sofort: false,
      kopf: false
    });
    const kenn = document.getElementById("kennzeichen");
    if (kenn && window.RECHTSFALL) {
      kenn.textContent = window.RECHTSFALL.kennung || "Beispielfall";
    }
  }
})();
