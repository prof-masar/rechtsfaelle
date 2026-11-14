/* Ergänzungskarte § 21 unverändert aus /workspace/quest/recht_baustein_21/baustein_21.json */
window.BAUSTEIN21 = {
  "id": "recht-baustein-21-unterbringung",
  "fach": "Recht",
  "klasse": "Strafrecht",
  "titel": "Was wäre, wenn …? Das psychiatrische Gutachten",
  "typ": "ergaenzungskarte",
  "bezug_fall": "recht_fall1",
  "vorab_hinweis": "Fiktive Variante zu Fall 1 „Dreimal das falsche Getränk“. Es gilt österreichisches Recht.",
  "einleitung": "Wir spielen Fall 1 anders weiter: In der Verhandlung gegen Herrn Reiter legt eine Psychiaterin ein Gutachten vor. Sie stellt fest: Herr Reiter hat eine schwerwiegende und nachhaltige psychische Störung. Die Tat geschah unter ihrem maßgeblichen Einfluss. Was bedeutet das rechtlich?",
  "figur": {
    "name": "Richterin Brandl",
    "rolle": "Landesgericht, Strafsachen",
    "emoji": "⚖️",
    "farbe": "#2f4f7f"
  },
  "stand": "2026-11-14",
  "quellen": [
    "§ 11 StGB (Zurechnungsunfähigkeit)",
    "§ 21 StGB idF BGBl. I Nr. 223/2022 (in Kraft seit 1.3.2023)",
    "§ 25 StGB",
    "§ 47 StGB"
  ],
  "schritte": [
    {
      "abschnitt": "Was wäre, wenn …? – Das Gutachten",
      "text": "Variante A: Laut Gutachten konnte Herr Reiter wegen der Störung zur Tatzeit nicht einsehen, dass sein Handeln Unrecht war. Kann er bestraft werden?",
      "hinweis": "Strafe setzt Schuld voraus. Was sagt § 11 StGB über die Schuld?",
      "optionen": [
        {
          "text": "Nein. Er handelte nicht schuldhaft. Bei hoher Gefahr weiterer schwerer Taten wird er aber untergebracht.",
          "richtig": true,
          "feedback": "Richtig. Er ist zurechnungsunfähig (§ 11 StGB). Statt Strafe kommt die Unterbringung in einem forensisch-therapeutischen Zentrum (§ 21 Abs 1)."
        },
        {
          "text": "Ja. Er wird ganz normal wegen Mordes bestraft.",
          "richtig": false,
          "feedback": "Nein. Ohne Schuld keine Strafe. Wer zurechnungsunfähig ist, handelt nicht schuldhaft (§ 11 StGB)."
        },
        {
          "text": "Nein, und es passiert gar nichts. Er ist sofort frei.",
          "richtig": false,
          "feedback": "Nein. Besteht die Gefahr weiterer schwerer Taten, ordnet das Gericht die Unterbringung an (§ 21 Abs 1 StGB)."
        }
      ],
      "theorie": "§ 11 StGB: Wer zur Tatzeit wegen einer schweren seelischen Störung unfähig ist, das Unrecht seiner Tat einzusehen oder danach zu handeln, handelt nicht schuldhaft. Er wird nicht bestraft. Das Gericht kann ihn aber nach § 21 Abs 1 StGB in einem forensisch-therapeutischen Zentrum unterbringen.",
      "wiederholung": {
        "frage": "Was ordnet das Gericht bei Zurechnungsunfähigkeit und hoher Gefahr an?",
        "optionen": [
          {
            "text": "Unterbringung, keine Strafe",
            "richtig": true
          },
          {
            "text": "Strafe und sonst nichts",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Was wäre, wenn …? – Das Gutachten",
      "text": "Variante B: Laut Gutachten war Herr Reiter zurechnungsfähig. Er wusste, dass er Unrecht tut. Die Tat geschah aber unter dem maßgeblichen Einfluss seiner Störung. Es besteht hohe Gefahr weiterer schwerer Taten. Was ordnet das Gericht an?",
      "optionen": [
        {
          "text": "Strafe und zugleich Unterbringung",
          "richtig": true,
          "feedback": "Richtig. § 21 Abs 2 StGB: Die Unterbringung ist zugleich mit der Strafe anzuordnen."
        },
        {
          "text": "Nur Unterbringung, keine Strafe",
          "richtig": false,
          "feedback": "Nein. Er war zurechnungsfähig, also schuldhaft. Er wird bestraft. Dazu kommt die Unterbringung."
        },
        {
          "text": "Nur Strafe, die Störung spielt keine Rolle",
          "richtig": false,
          "feedback": "Nein. Wegen der Störung und der hohen Gefahr ordnet das Gericht zusätzlich die Unterbringung an (§ 21 Abs 2 StGB)."
        }
      ],
      "theorie": "§ 21 Abs 2 StGB: Auch wer nicht zurechnungsunfähig ist, wird untergebracht, wenn er die Tat unter dem maßgeblichen Einfluss einer schwerwiegenden und nachhaltigen psychischen Störung begangen hat und die Gefahr besteht. Die Unterbringung wird zugleich mit der Strafe angeordnet.",
      "wiederholung": {
        "frage": "Zurechnungsfähig, aber unter Einfluss der Störung und gefährlich. Was folgt?",
        "optionen": [
          {
            "text": "Strafe und Unterbringung",
            "richtig": true
          },
          {
            "text": "Freispruch",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Was wäre, wenn …? – Das Gutachten",
      "text": "Nicht jede Tat führt zu einer Unterbringung. Welche Voraussetzungen nennt § 21 StGB?",
      "optionen": [
        {
          "text": "Die Tat ist mit mehr als 1 Jahr Freiheitsstrafe bedroht, und es ist mit hoher Wahrscheinlichkeit eine weitere Tat mit schweren Folgen zu befürchten.",
          "richtig": true,
          "feedback": "Richtig. Mord erfüllt die erste Voraussetzung klar. Die Gefahr muss das Gericht im Einzelfall prüfen."
        },
        {
          "text": "Es reicht, dass jemand eine psychische Störung hat.",
          "richtig": false,
          "feedback": "Nein. Eine Störung allein reicht nie. Es braucht eine Anlasstat und die hohe Gefahr weiterer schwerer Taten."
        },
        {
          "text": "Jede Tat reicht, auch eine kleine.",
          "richtig": false,
          "feedback": "Nein. Anlass können nur Taten sein, die mit mehr als einem Jahr Freiheitsstrafe bedroht sind (§ 21 Abs 3 StGB)."
        }
      ],
      "theorie": "§ 21 Abs 3 StGB: Anlass sind nur Taten, die mit mehr als einem Jahr Freiheitsstrafe bedroht sind. Dazu muss nach Person, Zustand und Art der Tat mit hoher Wahrscheinlichkeit zu befürchten sein, dass in absehbarer Zukunft eine Tat mit schweren Folgen begangen wird (§ 21 Abs 1).",
      "wiederholung": {
        "frage": "Reicht eine psychische Störung allein für eine Unterbringung?",
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
      "abschnitt": "Was wäre, wenn …? – Das Gutachten",
      "text": "Herr Reiter wird untergebracht. Wie lange dauert das?",
      "optionen": [
        {
          "text": "Unbestimmt. Das Gericht prüft mindestens jährlich, ob sie noch nötig ist. Entlassen wird nur bedingt, mit Probezeit.",
          "richtig": true,
          "feedback": "Richtig. § 25 Abs 1 und 3 sowie § 47 Abs 1 StGB. Entscheidend ist, ob die Gefährlichkeit noch besteht."
        },
        {
          "text": "Genau so lange, wie die Strafe für Mord wäre",
          "richtig": false,
          "feedback": "Nein. Die Unterbringung ist auf unbestimmte Zeit angeordnet. Sie dauert, solange ihr Zweck es erfordert (§ 25 Abs 1)."
        },
        {
          "text": "Für immer, ohne Überprüfung",
          "richtig": false,
          "feedback": "Nein. Das Gericht muss mindestens alljährlich von Amts wegen entscheiden, ob sie noch notwendig ist (§ 25 Abs 3)."
        }
      ],
      "theorie": "§ 25 StGB: Die Unterbringung gilt auf unbestimmte Zeit, solange ihr Zweck es erfordert. Das Gericht prüft mindestens alljährlich, ob sie noch notwendig ist. Nach § 47 StGB wird bedingt mit Probezeit entlassen, wenn die Gefährlichkeit nicht mehr besteht.",
      "wiederholung": {
        "frage": "Wie oft muss das Gericht mindestens prüfen, ob die Unterbringung noch nötig ist?",
        "optionen": [
          {
            "text": "Mindestens alljährlich",
            "richtig": true
          },
          {
            "text": "Nur alle zehn Jahre",
            "richtig": false
          }
        ]
      }
    }
  ],
  "reflexion": {
    "optional": true,
    "titel": "Reflexion (optional, zum Diskutieren)",
    "fragen": [
      "Die Unterbringung schützt die Allgemeinheit, nimmt dem Betroffenen aber die Freiheit, ohne festes Ende. Wie findet das Gesetz hier einen Ausgleich, und findest du ihn gelungen?"
    ]
  },
  "belohnung": {
    "xp": 40,
    "abzeichen": {
      "name": "Maßnahmen-Kenner",
      "emoji": "🩺"
    }
  },
  "abschluss": "Gut gemacht! Ohne Schuld gibt es keine Strafe. Besteht aber hohe Gefahr weiterer schwerer Taten, kann das Gericht eine Unterbringung anordnen, mit regelmäßiger Überprüfung."
};
window.BAUSTEINE = window.BAUSTEINE || [];
window.BAUSTEINE.push(window.BAUSTEIN21);
