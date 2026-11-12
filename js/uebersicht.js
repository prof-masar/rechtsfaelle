(function () {
  const quelle = window.FAELLE;
  const app = document.getElementById("app");
  if (!quelle || !app) return;

  const faelle = Array.isArray(quelle) ? quelle : quelle.faelle || [];

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const gebiete = [];
  const nachGebiet = new Map();
  faelle.forEach(function (f) {
    const g = f.gebiet || "Weitere Fälle";
    if (!nachGebiet.has(g)) {
      nachGebiet.set(g, []);
      gebiete.push(g);
    }
    nachGebiet.get(g).push(f);
  });

  function karte(f) {
    const meta = [f.gebiet, f.thema].filter(Boolean).join(" › ");
    const anzahl = f.stationen ? f.stationen + " Stationen" : "";
    const zeile = [meta, anzahl].filter(Boolean).join(" · ");
    return (
      '<a class="card fall-karte" href="' +
      escapeHtml(f.pfad) +
      '">' +
      (f.kennung
        ? '<span class="badge">' + escapeHtml(f.kennung) + "</span>"
        : "") +
      "<h3>" +
      escapeHtml(f.titel) +
      "</h3>" +
      (zeile ? '<p class="start-meta">' + escapeHtml(zeile) + "</p>" : "") +
      (f.kurzbeschreibung
        ? "<p>" + escapeHtml(f.kurzbeschreibung) + "</p>"
        : "") +
      '<span class="btn primary block">Fall öffnen</span>' +
      "</a>"
    );
  }

  let html =
    '<p class="intro">Fälle zum Üben: kurzes Video, dann entscheidest du, was rechtlich gilt.</p>';

  gebiete.forEach(function (g) {
    html += '<section class="gebiet"><h2>' + escapeHtml(g) + "</h2>";
    const themen = [];
    const nachThema = new Map();
    nachGebiet.get(g).forEach(function (f) {
      const t = f.thema || "";
      if (!nachThema.has(t)) {
        nachThema.set(t, []);
        themen.push(t);
      }
      nachThema.get(t).push(f);
    });
    themen.forEach(function (t) {
      if (t) html += '<h3 class="thema">' + escapeHtml(t) + "</h3>";
      nachThema.get(t).forEach(function (f) {
        html += karte(f);
      });
    });
    html += "</section>";
  });

  if (!faelle.length) {
    html += '<p class="muted">Noch keine Fälle eingetragen.</p>';
  }

  const t = document.createElement("template");
  t.innerHTML = html.trim();
  app.replaceChildren(t.content);
})();
