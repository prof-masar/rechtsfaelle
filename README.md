# Rechtsfälle

Lernapp mit interaktiven Rechtsfällen. Live: https://prof-masar.github.io/rechtsfaelle/

Aktuell liegt ein Fall unter **Privatrecht › Kaufvertrag**: *Der Laptop mit dem Farbfehler*.

Die App läuft ohne Tracking, ohne Analytics und ohne externe Skripte. Alles liegt in diesem Repository.

## Neuen Fall ergänzen

1. Ordner `faelle/<id>/` anlegen: `fall.js` (und optional `fall.json`) plus Videos, Schema siehe `FORMAT.md`.
2. Eintrag in `inhalte/faelle.js` und `inhalte/faelle.json` ergänzen (`gebiet`, `thema`, `titel`, `pfad`).
