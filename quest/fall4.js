/* Fall 4 unverändert aus /workspace/quest/recht_fall4/recht_fall4.json */
window.FALL4 = {
  "id": "recht-fall4-auto",
  "fach": "Recht",
  "klasse": "HLW, Strafrecht",
  "titel": "Rache am Auto",
  "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
  "einleitung": "Cornelius Pichler ist 34. Seine Nachbarin, Frau Yasmin Tauber, hat ihn bei der Hausverwaltung wegen Lärm gemeldet. Aus Rache zerkratzt er in der Nacht ihr Auto. Eine Kamera in der Garage filmt ihn. Du begleitest das Strafverfahren.",
  "figur": {
    "name": "Richter Stojanović",
    "rolle": "Strafgericht",
    "emoji": "⚖️",
    "farbe": "#2f4f7f"
  },
  "stand": "2026-11-13",
  "quellen": [
    "§ 125 StGB (Sachbeschädigung)",
    "§ 126 Abs 1 Z 7 StGB (schwere Sachbeschädigung)",
    "§ 191 StPO",
    "§ 198 StPO",
    "§ 43 StGB"
  ],
  "schritte": [
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Die Polizei hat das Video. Cornelius gibt die Kratzer zu. Welche Straftat liegt vor?",
      "optionen": [
        {
          "text": "Sachbeschädigung (§ 125 StGB)",
          "richtig": true,
          "feedback": "Richtig. Wer eine fremde Sache beschädigt, begeht Sachbeschädigung."
        },
        {
          "text": "Diebstahl (§ 127 StGB)",
          "richtig": false,
          "feedback": "Nein. Cornelius hat nichts weggenommen. Er hat das Auto beschädigt."
        },
        {
          "text": "Keine. Frau Tauber hat ja angefangen.",
          "richtig": false,
          "feedback": "Nein. Eine Meldung bei der Hausverwaltung erlaubt keine Rache. Die Beschädigung bleibt strafbar."
        }
      ],
      "theorie": "§ 125 StGB: Wer eine fremde Sache zerstört, beschädigt, verunstaltet oder unbrauchbar macht, begeht Sachbeschädigung. Ein zerkratzter Lack ist eine Beschädigung.",
      "wiederholung": {
        "frage": "Ist ein zerkratztes fremdes Auto eine beschädigte Sache?",
        "optionen": [
          {
            "text": "Ja",
            "richtig": true
          },
          {
            "text": "Nein",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Die Werkstatt schätzt zuerst: 900 Euro Schaden. Welcher Strafrahmen gilt für die Sachbeschädigung (§ 125 StGB)?",
      "optionen": [
        {
          "text": "Freiheitsstrafe bis zu 6 Monaten oder Geldstrafe bis zu 360 Tagessätzen",
          "richtig": true,
          "feedback": "Richtig. Das ist der Strafrahmen des § 125 StGB."
        },
        {
          "text": "Freiheitsstrafe bis zu 2 Jahren",
          "richtig": false,
          "feedback": "Nein. Das ist der Strafrahmen der schweren Sachbeschädigung (§ 126 Abs 1 StGB)."
        },
        {
          "text": "Nur Schadenersatz, keine Strafe",
          "richtig": false,
          "feedback": "Nein. Schadenersatz ist Zivilrecht. Daneben ist die Tat auch strafbar."
        }
      ],
      "theorie": "Für die einfache Sachbeschädigung gibt es bis 6 Monate Freiheitsstrafe oder Geldstrafe. Schadenersatz an die Nachbarin ist eine eigene, zivilrechtliche Frage.",
      "wiederholung": {
        "frage": "Schließt die Strafe den Schadenersatz aus?",
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
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "In der Verhandlung liegt ein Gutachten vor: Die Kratzer gehen über alle Seiten. Das ganze Auto muss neu lackiert werden. Schaden: 6.300 Euro. Cornelius sagt: „Ich wollte, dass sie das ganze Auto neu lackieren muss.“ Was ändert sich?",
      "hinweis": "Vergleich den Schaden mit der Wertgrenze in § 126 Abs 1 Z 7 StGB.",
      "optionen": [
        {
          "text": "Es ist jetzt schwere Sachbeschädigung, weil der Schaden über 5.000 Euro liegt.",
          "richtig": true,
          "feedback": "Richtig. § 126 Abs 1 Z 7 StGB: Sachbeschädigung mit einem Schaden über 5.000 Euro."
        },
        {
          "text": "Nichts. Es bleibt bei § 125 StGB.",
          "richtig": false,
          "feedback": "Nein. Der Schaden liegt über 5.000 Euro. Das Gesetz bestraft das strenger."
        },
        {
          "text": "Es wird Diebstahl, weil der Schaden so hoch ist.",
          "richtig": false,
          "feedback": "Nein. Die Höhe des Schadens macht aus einer Beschädigung keinen Diebstahl."
        }
      ],
      "theorie": "Wie bei Diebstahl und Betrug gibt es auch bei der Sachbeschädigung eine Wertgrenze. Liegt der Schaden an der Sache über 5.000 Euro, ist es schwere Sachbeschädigung (§ 126 Abs 1 Z 7 StGB).",
      "wiederholung": {
        "frage": "Ab welchem Schaden ist es schwere Sachbeschädigung?",
        "optionen": [
          {
            "text": "Über 5.000 Euro",
            "richtig": true
          },
          {
            "text": "Über 900 Euro",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Welcher Strafrahmen gilt jetzt für die schwere Sachbeschädigung (§ 126 Abs 1 StGB)?",
      "optionen": [
        {
          "text": "Freiheitsstrafe bis zu 2 Jahren",
          "richtig": true,
          "feedback": "Richtig. Das ist der Strafrahmen des § 126 Abs 1 StGB."
        },
        {
          "text": "Freiheitsstrafe von 6 Monaten bis zu 5 Jahren",
          "richtig": false,
          "feedback": "Nein. Das gilt erst bei einem Schaden über 300.000 Euro (§ 126 Abs 2 StGB)."
        },
        {
          "text": "Freiheitsstrafe bis zu 6 Monaten",
          "richtig": false,
          "feedback": "Nein. Das ist die einfache Sachbeschädigung. Hier liegt der Schaden über 5.000 Euro."
        }
      ],
      "theorie": "§ 126 Abs 1 StGB: Freiheitsstrafe bis zu 2 Jahren. § 126 Abs 2 StGB: bei einem Schaden über 300.000 Euro 6 Monate bis 5 Jahre. Der Strafrahmen steigt mit dem Schaden.",
      "wiederholung": {
        "frage": "Welcher Strafrahmen gilt bei 6.300 Euro Schaden?",
        "optionen": [
          {
            "text": "Bis 2 Jahre",
            "richtig": true
          },
          {
            "text": "Bis 6 Monate",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Der Verteidiger sagt: „Frau Tauber hat ihn zuerst gemeldet. Er hat sich nur gewehrt.“ Ändert der Rache-Grund etwas daran, ob die Tat strafbar ist?",
      "optionen": [
        {
          "text": "Nein. Das Motiv ist für den Tatbestand egal.",
          "richtig": true,
          "feedback": "Richtig. § 125 und § 126 fragen nicht nach dem Grund. Rache macht die Tat nicht erlaubt."
        },
        {
          "text": "Ja. Wer zuerst angegriffen wird, darf sich rächen.",
          "richtig": false,
          "feedback": "Nein. Eine Meldung bei der Hausverwaltung ist kein Angriff. Rache ist keine Rechtfertigung."
        }
      ],
      "theorie": "Das Gesetz beschreibt bei der Sachbeschädigung nur die Handlung: zerstören, beschädigen, verunstalten, unbrauchbar machen. Warum der Täter das tut, spielt für die Strafbarkeit keine Rolle.",
      "wiederholung": {
        "frage": "Macht Rache eine Sachbeschädigung erlaubt?",
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
      "abschnitt": "Urteil",
      "text": "Das Gericht entscheidet. Welches Urteil passt zu allem, was wir festgestellt haben?",
      "optionen": [
        {
          "text": "Schuldig der schweren Sachbeschädigung (§ 126 Abs 1 Z 7 StGB): bis 2 Jahre",
          "richtig": true,
          "feedback": "Richtig. Er hat das Auto vorsätzlich beschädigt. Der Schaden liegt über 5.000 Euro."
        },
        {
          "text": "Schuldig der Sachbeschädigung (§ 125 StGB): bis 6 Monate",
          "richtig": false,
          "feedback": "Nein. Das Gutachten zeigt einen Schaden über 5.000 Euro."
        },
        {
          "text": "Freispruch wegen Rache",
          "richtig": false,
          "feedback": "Nein. Rache rechtfertigt keine Sachbeschädigung."
        }
      ],
      "theorie": "Erst das Gutachten hat den wahren Schaden gezeigt. Damit wurde aus der Sachbeschädigung eine schwere Sachbeschädigung. Das Motiv Rache ändert daran nichts.",
      "wiederholung": {
        "frage": "Was hat die Einschätzung in der Verhandlung verändert?",
        "optionen": [
          {
            "text": "Die Höhe des Schadens",
            "richtig": true
          },
          {
            "text": "Das Motiv Rache",
            "richtig": false
          }
        ]
      }
    }
  ],
  "urteil": {
    "spruch": "Cornelius Pichler ist schuldig der schweren Sachbeschädigung nach § 126 Abs 1 Z 7 StGB.",
    "strafe": "Fiktiv: 4 Monate Freiheitsstrafe, bedingt nachgesehen mit 3 Jahren Probezeit (§ 43 StGB; Strafrahmen bis 2 Jahre).",
    "begruendung": [
      "Er hat das Auto der Nachbarin vorsätzlich zerkratzt.",
      "Der Schaden beträgt 6.300 Euro und liegt damit über 5.000 Euro (§ 126 Abs 1 Z 7 StGB).",
      "Rache ist kein Rechtfertigungsgrund."
    ]
  },
  "reflexion": {
    "optional": true,
    "titel": "Reflexion (optional, zum Diskutieren)",
    "fragen": [
      "Eine bedingte Strafe für 6.300 Euro Schaden: zu mild, zu streng oder passend?",
      "Bei einem Nachbarschaftsstreit: Wäre ein Ausgleich zwischen Cornelius und Frau Tauber sinnvoller als eine Strafe? Welche Wege kennt das österreichische Recht dafür?"
    ]
  },
  "belohnung": {
    "xp": 60,
    "abzeichen": {
      "name": "Schadens-Schätzer",
      "emoji": "🚗"
    }
  },
  "abschluss": "Gut gemacht! Bei der Sachbeschädigung zählt die Höhe des Schadens: Über 5.000 Euro wird es schwere Sachbeschädigung. Rache ist nie eine Rechtfertigung."
};
window.FAELLE = window.FAELLE || [];
window.FAELLE.push(window.FALL4);
