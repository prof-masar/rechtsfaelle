# Fallinhalte für interaktive Rechtsfälle

Bitte jeden Fall als eine JSON-Datei in diesem Schema liefern. Neue Fälle kommen in einen eigenen Ordner `faelle/<id>/` (`fall.js` bzw. `fall.json` plus Videos). Zusätzlich einen Eintrag in der zentralen Liste `inhalte/faelle.js` und `inhalte/faelle.json` ergänzen.

Die Datei kann als reines JSON (`fall.json`) oder als JavaScript (`window.RECHTSFALL = { … };`, wie `fall.js`) übergeben werden.

## Zentrale Liste

In `inhalte/faelle.json` / `inhalte/faelle.js` steht die Übersicht. Neue Fälle nur dort und mit dem Ordner ergänzen. Felder:

| Feld | Bedeutung |
|---|---|
| `id` | Kurzname des Ordners, z. B. `laptop-farbfehler`. |
| `gebiet` | Rechtsgebiet für die Übersicht, z. B. `Privatrecht`. |
| `thema` | Thema innerhalb des Gebiets, z. B. `Kaufvertrag`. |
| `titel` | Titel des Falls. |
| `kennung` | Optional, z. B. `Beispielfall`. |
| `kurzbeschreibung` | Zwei bis drei Sätze für die Karte auf der Startseite. |
| `stationen` | Anzahl der Stationen. |
| `pfad` | Relativer Pfad vom Wurzel-`index.html`, z. B. `faelle/laptop-farbfehler/`. |

Dieselben Felder `gebiet` und `thema` gehören auch in die Falldatei.

## Tabellenvorlage

Eine Zeile = eine Station. Buttons, Konsequenzen und Theorie gehören in dieselbe Zeile, klar den einzelnen Buttons zugeordnet.

| Station | Video | Situationstext | Buttons | Konsequenzen | Theorie | Dashboard-Zeile |
|---|---|---|---|---|---|---|
| Kurztitel der Station, z. B. Vertragsschluss. Optional zusätzlich ein Kurzname für die Zeitleiste (max. etwa 14 Zeichen). | Relativer Pfad der späteren MP4-Datei (z. B. `videos/station1_vertrag.mp4`) plus eine kurze Szenenbeschreibung (Ort und Handlung, keine gesprochenen Sätze). Die Clips und Sprechertexte erstellt Web & Lernapps selbst. Das Video steht oben in der Station, 16:9, etwa 6 Sekunden. | Inhaltliche Kurzzusammenfassung in einfacher Schülersprache, für den Fall, dass jemand das Video nicht gesehen hat. Keine wörtlichen Sprechertexte. Im Satz stehen vor allem die Fakten, die man im Clip nicht sicher erkennt: Namen, Daten, Beträge. | 2–3 Antwortmöglichkeiten. Jede genau einer Bewertung zuordnen: **richtig**, **uebersehen** oder **falsch**. Idealerweise kommt jede Bewertung in einem Fall mindestens einmal vor. | Zu jedem Button genau ein Satz. Er sagt, was die Wahl rechtlich bedeutet. | Nur beim Button **falsch**: 2–3 Sätze Erklärung, danach eine Mini-Wiederholungsfrage mit 2 Buttons (richtig/falsch) und je einem Satz als Konsequenz. Bei richtig und uebersehen leer lassen. | Ein Thema (als Fragesatz oder Kurzformel) plus drei Texte: was die Dashboard-Zeile zeigt, wenn die erste Antwort richtig, übersehen oder falsch war. Die Wiederholungsfrage ändert die Dashboard-Zeile nicht. |

## Video

Im JSON-Feld `video` steht nur der relative Pfad zur MP4-Datei (bezogen auf `faelle/<id>/index.html`). Der Recht-Bot liefert dazu eine kurze Szenenbeschreibung, aber keine gesprochenen Sätze. Videoszenen und Sprechertexte erstellt Web & Lernapps selbst. Videos sind immer auf Deutsch, im Ton und im Bild.

Beispiele für Szenenbeschreibungen:

- `videos/station1_vertrag.mp4` — Im Elektronikgeschäft zeigt eine junge Frau auf einen ausgestellten Laptop, zahlt bar, erhält Kassabon und Gerät; einen schriftlichen Vertrag gibt es nicht.
- `videos/station2_verbraucher.mp4` — Dieselbe Frau sitzt zu Hause am Schreibtisch zwischen Büchern und lernt am Laptop; der Kauf dient Studium und Freizeit.
- `videos/station3_mangel.mp4` — Im Herbst erscheint auf dem Bildschirm ein dauerhafter Farbfehler; die Frau ist erschrocken.
- `videos/station4_behelfe.mp4` — Im Geschäft zeigt sie den mangelhaften Bildschirm und den Kassabon; die Verkäuferin lehnt ab und verweist auf den Hersteller.

Das Poster liegt als JPG neben der Datei (`videos/station1_vertrag_poster.jpg`, erster Frame). Kein CDN, kein Tracking.

## Bewertungen

- **richtig**: Die Rechtsregel ist zutreffend auf den Sachverhalt angewendet (richtig subsumiert).
- **uebersehen**: Die Richtung stimmt teilweise, ein entscheidender Punkt fehlt.
- **falsch**: Die rechtliche Einordnung trifft nicht zu. Danach folgen Theorie und Wiederholungsfrage.

## JSON-Schema (Beispiel einer Station)

```json
{
  "kennung": "Beispielfall",
  "titel": "Titel des Falls",
  "gebiet": "Privatrecht",
  "thema": "Kaufvertrag",
  "rechtsgebiet": "Optional, feinere Bezeichnung für den Fall, z. B. Vertragsrecht / Gewährleistung.",
  "kurzbeschreibung": "Zwei bis drei Sätze für die Startkarte.",
  "einleitung": "Optionaler Überblick über den gesamten Sachverhalt.",
  "hinweis": "Optional, intern.",
  "stationen": [
    {
      "station": "Vertragsschluss",
      "kurzname": "Vertrag",
      "video": "videos/station1_vertrag.mp4",
      "situationstext": "Inhaltliche Kurzzusammenfassung mit den Fakten, die das Video nicht sicher zeigt.",
      "buttons": [
        {
          "id": "s1-richtig",
          "label": "Text auf dem Button.",
          "bewertung": "richtig",
          "konsequenz": "Genau ein Satz."
        },
        {
          "id": "s1-falsch",
          "label": "Text auf dem Button.",
          "bewertung": "falsch",
          "konsequenz": "Genau ein Satz.",
          "theorie": "Zwei bis drei Sätze.",
          "wiederholung": {
            "frage": "Kurze Frage zum eben erklärten Punkt.",
            "buttons": [
              {
                "id": "s1-w-falsch",
                "label": "Antwort.",
                "richtig": false,
                "konsequenz": "Genau ein Satz."
              },
              {
                "id": "s1-w-richtig",
                "label": "Antwort.",
                "richtig": true,
                "konsequenz": "Genau ein Satz."
              }
            ]
          }
        },
        {
          "id": "s1-uebersehen",
          "label": "Text auf dem Button.",
          "bewertung": "uebersehen",
          "konsequenz": "Genau ein Satz, der benennt, was übersehen wurde."
        }
      ],
      "dashboard_zeile": {
        "thema": "Kaufvertrag zustande gekommen?",
        "richtig": "Text bei richtig subsumiert.",
        "uebersehen": "Text bei übersehen.",
        "falsch": "Text bei falsch."
      }
    }
  ]
}
```

## Hinweise für die Lieferung

- 3–5 Stationen je Fall.
- Sprache: Deutsch (Österreich), einfach und eindeutig, Schülersprache der HLW.
- Fachlich korrekt auf den genannten Rechtsgrundlagen (Paragraphen gerne in der Theorie, nicht als Vorlesung auf den Buttons).
- Keine echten Marken, keine personenbezogenen Daten.
- `id`-Werte stabil und eindeutig halten (z. B. `s2-falsch`, `s2-w-richtig`).
- Die aktuelle Datei `faelle/laptop-farbfehler/fall.json` ist ein gekennzeichnetes Beispiel, keine fertige Recht-Lieferung.
- Keine wörtlichen Sprechertexte liefern; die inhaltliche Kurzzusammenfassung im Feld `situationstext` reicht.
