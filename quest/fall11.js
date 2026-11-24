/* Fall 11 unverändert aus recht_fall11.json (Inhalt nach JUSTIZIA Akte 06 „Moped, Lack, Pech“) */
window.FALL11 = {
 "id": "recht-fall11-moped",
 "fach": "Recht",
 "gebiet": "Privatrecht im Alltag",
 "klasse": "Schadenersatz · StVO",
 "titel": "Moped, Spiegel, Pech",
 "quelle_justizia": "Akte 06 „Moped, Lack, Pech“",
 "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
 "einleitung": "Felix ist 17 und fährt Moped. Nach einem Bier im Gasthaus streift er auf dem Heimweg den Außenspiegel eines geparkten Autos. Niemand ist verletzt. Die Besitzerin, Frau Novak, verlangt 1.400 Euro für die Reparatur. Felix meint: „Das zahlt doch eh die Versicherung.“",
 "figur": {
  "name": "Justizia",
  "rolle": "Rechtsberatung",
  "emoji": "⚖️",
  "farbe": "#2f4f7f"
 },
 "stand": "2026-11-24",
 "rechtsstand": "November 2026",
 "hauptnormen": [
  "§ 4 StVO",
  "§§ 1293–1295 ABGB",
  "§ 125 StGB",
  "§ 7 StGB"
 ],
 "quellen": [
  "§ 4 StVO (Pflichten nach einem Unfall)",
  "§ 99 StVO (Strafen)",
  "§ 1293 ABGB (Schaden)",
  "§ 1294 ABGB (Verschulden)",
  "§ 1295 ABGB (Schadenersatz)",
  "§ 26 KHVG (Direktanspruch gegen die Versicherung)",
  "§ 7 Abs 1 StGB (Vorsatz als Regel)",
  "§ 125 StGB (Sachbeschädigung)",
  "§ 88 StGB (fahrlässige Körperverletzung)",
  "§ 4 JGG (Strafmündigkeit)",
  "FSG (Alkoholgrenze 0,1 Promille für Klasse AM bis 20)"
 ],
 "schritte": [
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Felix bemerkt den kaputten Spiegel. Frau Novak ist nicht da. Was muss er jetzt tun?",
   "optionen": [
    {
     "text": "Anhalten, und wenn er die Besitzerin nicht erreicht, sofort die Polizei verständigen",
     "richtig": true,
     "feedback": "Richtig. Kann er sich nicht mit der Geschädigten austauschen, muss er ohne unnötigen Aufschub die Polizei verständigen (§ 4 Abs 5 StVO)."
    },
    {
     "text": "Weiterfahren, es ist ja nur ein Spiegel",
     "richtig": false,
     "feedback": "Nein. Das ist Fahrerflucht. Dafür gibt es eine Strafe nach der StVO und Ärger mit der Versicherung."
    },
    {
     "text": "Einen Zettel ohne Namen hinter den Scheibenwischer klemmen",
     "richtig": false,
     "feedback": "Nein. Ein Zettel ohne Namen hilft niemandem. Er muss seine Daten austauschen oder die Polizei verständigen."
    }
   ],
   "theorie": "Wer an einem Verkehrsunfall beteiligt ist, muss sofort anhalten und an der Klärung mitwirken (§ 4 Abs 1 StVO). Bei bloßem Sachschaden reicht es, mit der Geschädigten Name und Anschrift auszutauschen. Ist das nicht möglich, muss man ohne unnötigen Aufschub die nächste Polizeidienststelle verständigen (§ 4 Abs 5 StVO). Wer das nicht tut, begeht eine Verwaltungsübertretung (§ 99 StVO).",
   "wiederholung": {
    "frage": "Was muss Felix tun, wenn er die Besitzerin nicht erreicht?",
    "optionen": [
     {
      "text": "Die Polizei verständigen",
      "richtig": true
     },
     {
      "text": "Nichts",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Muss Felix den Schaden ersetzen? Er wollte den Spiegel ja nicht beschädigen.",
   "hinweis": "Hätte Felix besser aufpassen können?",
   "optionen": [
    {
     "text": "Ja. Er hat nicht aufgepasst und den Schaden schuldhaft verursacht.",
     "richtig": true,
     "feedback": "Richtig. Auch wer fahrlässig handelt, muss Schadenersatz leisten (§ 1295 Abs 1 ABGB)."
    },
    {
     "text": "Nein. Ersatz gibt es nur bei Absicht.",
     "richtig": false,
     "feedback": "Nein. Für Schadenersatz reicht Fahrlässigkeit. Absicht ist nicht nötig."
    },
    {
     "text": "Nein. Mit 17 haftet man nie selbst.",
     "richtig": false,
     "feedback": "Nein. Wer 14 oder älter ist, haftet in der Regel selbst für Schäden, die er schuldhaft verursacht."
    }
   ],
   "theorie": "Schadenersatz braucht vier Voraussetzungen: einen Schaden, die Verursachung, Rechtswidrigkeit und Verschulden (§§ 1293 ff ABGB). Verschulden heißt Vorsatz oder Fahrlässigkeit (§ 1294 ABGB). Fahrlässig handelt, wer die nötige Sorgfalt nicht einhält. Ab 14 Jahren haftet man in der Regel selbst.",
   "wiederholung": {
    "frage": "Reicht Fahrlässigkeit für Schadenersatz?",
    "optionen": [
     {
      "text": "Ja",
      "richtig": true
     },
     {
      "text": "Nein, nur Absicht",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Felix fragt: „Zahlt das wirklich die Versicherung?“",
   "optionen": [
    {
     "text": "Ja, die Haftpflichtversicherung zahlt Frau Novak. Wegen des Alkohols kann sie sich aber Geld von Felix zurückholen.",
     "richtig": true,
     "feedback": "Richtig. Frau Novak kann sich direkt an die Haftpflichtversicherung wenden (§ 26 KHVG). Bei Alkohol kann die Versicherung einen Teil von Felix zurückfordern."
    },
    {
     "text": "Nein. Für Mopeds gibt es keine Versicherung.",
     "richtig": false,
     "feedback": "Nein. Auch ein Moped braucht eine Haftpflichtversicherung, sonst darf es nicht fahren."
    },
    {
     "text": "Ja, und Felix hat danach nichts mehr damit zu tun.",
     "richtig": false,
     "feedback": "Nicht ganz. Wegen des Biers kann die Versicherung Geld von Felix zurückverlangen."
    }
   ],
   "theorie": "Jedes Moped braucht eine Kfz-Haftpflichtversicherung. Die Geschädigte kann ihren Anspruch direkt gegen die Versicherung richten (§ 26 KHVG). Hat der Lenker Pflichten verletzt, zum Beispiel durch Alkohol am Steuer, kann die Versicherung bis zu einem gesetzlichen Höchstbetrag Geld von ihm zurückverlangen (Regress).",
   "wiederholung": {
    "frage": "An wen kann sich Frau Novak direkt wenden?",
    "optionen": [
     {
      "text": "An die Haftpflichtversicherung",
      "richtig": true
     },
     {
      "text": "An den Bürgermeister",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 2 – Weiterdenken",
   "text": "Frau Novak droht mit einer Anzeige wegen Sachbeschädigung. Ist Felix wegen des Spiegels nach dem Strafgesetzbuch strafbar?",
   "optionen": [
    {
     "text": "Nein. Sachbeschädigung ist nur strafbar, wenn man sie absichtlich begeht.",
     "richtig": true,
     "feedback": "Richtig. § 125 StGB verlangt Vorsatz. Eine fahrlässige Sachbeschädigung ist nicht strafbar (§ 7 Abs 1 StGB)."
    },
    {
     "text": "Ja. Jeder Schaden ist eine Straftat.",
     "richtig": false,
     "feedback": "Nein. Zivilrecht und Strafrecht sind getrennt. Ersatz leisten ja, Strafe nur, wenn das Gesetz es vorsieht."
    },
    {
     "text": "Nein, weil er erst 17 ist.",
     "richtig": false,
     "feedback": "Nein. Ab 14 ist man strafmündig (§ 4 JGG). Hier fehlt aber der Vorsatz."
    }
   ],
   "theorie": "Im Strafrecht ist nur vorsätzliches Handeln strafbar, außer das Gesetz bestraft ausdrücklich auch Fahrlässigkeit (§ 7 Abs 1 StGB). Die Sachbeschädigung (§ 125 StGB) setzt Vorsatz voraus. Jugendliche ab 14 sind strafmündig, für sie gilt das Jugendgerichtsgesetz. Wäre jemand verletzt worden, käme fahrlässige Körperverletzung in Frage (§ 88 StGB).",
   "wiederholung": {
    "frage": "Ist eine fahrlässige Sachbeschädigung strafbar?",
    "optionen": [
     {
      "text": "Nein",
      "richtig": true
     },
     {
      "text": "Ja",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 2 – Weiterdenken",
   "text": "Die Polizei misst bei Felix 0,3 Promille. Was gilt für ihn als 17-jährigen Mopedlenker?",
   "optionen": [
    {
     "text": "Er lag über der Grenze. Für Mopedlenker unter 20 gilt 0,1 Promille. Ihm droht eine Verwaltungsstrafe.",
     "richtig": true,
     "feedback": "Richtig. Für die Klasse AM gilt bis zum 20. Geburtstag eine Grenze von 0,1 Promille. Ein Verstoß ist eine Verwaltungsübertretung."
    },
    {
     "text": "Alles in Ordnung, die Grenze liegt bei 0,5 Promille.",
     "richtig": false,
     "feedback": "Nein. 0,5 Promille gilt für die meisten anderen Lenker. Für junge Mopedlenker ist die Grenze 0,1 Promille."
    },
    {
     "text": "Er kommt deswegen sicher ins Gefängnis.",
     "richtig": false,
     "feedback": "Nein. Mit Alkohol zu fahren ist hier, ohne Verletzte, eine Verwaltungsübertretung, keine Straftat nach dem StGB."
    }
   ],
   "theorie": "Neben Zivilrecht und Strafrecht gibt es das Verwaltungsrecht. Für Mopedlenker mit Klasse AM gilt bis zum 20. Geburtstag eine Alkoholgrenze von 0,1 Promille, sonst meist 0,5 Promille. Wer darüber fährt, bekommt eine Verwaltungsstrafe. Bei höheren Werten droht auch der Entzug der Lenkberechtigung.",
   "wiederholung": {
    "frage": "Welche Alkoholgrenze gilt für Mopedlenker unter 20?",
    "optionen": [
     {
      "text": "0,1 Promille",
      "richtig": true
     },
     {
      "text": "0,5 Promille",
      "richtig": false
     }
    ]
   }
  }
 ],
 "ergebnis": {
  "art": "Drei Rechtsbereiche, drei Ergebnisse",
  "inhalt": "Felix muss den Schaden ersetzen, zuerst zahlt seine Haftpflichtversicherung. Nach dem StGB ist er nicht strafbar. Für das Fahren mit 0,3 Promille bekommt er eine Verwaltungsstrafe.",
  "begruendung": [
   "Zivilrecht: Felix hat den Schaden fahrlässig verursacht und muss ihn ersetzen (§ 1295 ABGB, § 26 KHVG).",
   "Strafrecht: Fahrlässige Sachbeschädigung ist nicht strafbar (§ 7 Abs 1, § 125 StGB).",
   "Verwaltungsrecht: Weil er angehalten und die Polizei verständigt hat, gibt es keine Strafe wegen Fahrerflucht. Die Alkoholgrenze von 0,1 Promille hat er aber überschritten."
  ]
 },
 "reflexion": {
  "optional": true,
  "titel": "Reflexion (optional, zum Diskutieren)",
  "fragen": [
   "Warum gilt für junge Mopedlenker eine strengere Alkoholgrenze? Findest du das fair?",
   "Was ist der Unterschied zwischen „Schaden ersetzen“ und „bestraft werden“?"
  ]
 },
 "belohnung": {
  "xp": 50,
  "abzeichen": {
   "name": "Unfall-Checker",
   "emoji": "🛵"
  }
 },
 "abschluss": "Gut gemacht! Ein kleiner Unfall kann drei Rechtsbereiche betreffen: Zivilrecht (Ersatz), Strafrecht (nur bei Vorsatz oder Verletzten) und Verwaltungsrecht (StVO, Führerschein)."
};
window.FAELLE = window.FAELLE || [];
window.FAELLE.push(window.FALL11);
