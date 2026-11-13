/* Fall 1 unverändert aus /workspace/quest/recht_fall1/recht_fall1.json */
window.FALL = {
  "id": "recht-fall1-getraenk",
  "fach": "Recht",
  "klasse": "HLW, Strafrecht",
  "titel": "Dreimal das falsche Getränk",
  "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
  "einleitung": "Herr Kasimir Reiter sitzt in einem Wiener Lokal. Dreimal bringt ihm der Kellner, Herr Jovan Marić, das falsche Getränk. Herr Reiter wird sehr wütend. Kurz danach kommt es zu einem Zwischenfall. Herr Marić stirbt. Du begleitest das Strafverfahren.",
  "figur": {
    "name": "Richterin Brandl",
    "rolle": "Landesgericht, Strafsachen",
    "emoji": "⚖️",
    "farbe": "#2f4f7f"
  },
  "stand": "2026-11-13",
  "quellen": [
    "§ 5 Abs 1 StGB (Vorsatz)",
    "§ 75 StGB (Mord)",
    "§ 76 StGB (Totschlag)",
    "§ 80 Abs 1 StGB (Fahrlässige Tötung)",
    "§ 31 Abs 2 Z 1 StPO (Geschworenengericht)",
    "RIS-Justiz RS0092259",
    "OGH 15 Os 6/23f",
    "§ 198 Abs 2 StPO (Diversion)",
    "§ 43 Abs 1 StGB (bedingte Strafnachsicht)"
  ],
  "hinweis_rechtsvergleich": "In Deutschland wäre das nach § 211 StGB (niedriger Beweggrund) zu prüfen – hier gilt österreichisches Recht.",
  "schritte": [
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Bei der Polizei sagt Herr Reiter: „Ich bin wütend aufgesprungen und gestolpert. Dabei habe ich den Kellner umgestoßen. Er ist mit dem Kopf gegen die Theke gefallen. Das wollte ich nicht.“ Angenommen, das stimmt: Welche Straftat kommt in Frage?",
      "hinweis": "Wollte Herr Reiter den Tod? Oder ist etwas aus Unachtsamkeit passiert?",
      "optionen": [
        {
          "text": "Fahrlässige Tötung (§ 80 StGB)",
          "richtig": true,
          "feedback": "Richtig. Wer den Tod nicht will, ihn aber durch Unachtsamkeit verursacht, handelt fahrlässig."
        },
        {
          "text": "Mord (§ 75 StGB)",
          "richtig": false,
          "feedback": "Nein. Mord verlangt Vorsatz. Nach dieser Version wollte Herr Reiter niemanden töten."
        },
        {
          "text": "Totschlag (§ 76 StGB)",
          "richtig": false,
          "feedback": "Nein. Auch Totschlag ist eine vorsätzliche Tötung. Nach dieser Version fehlt der Vorsatz."
        }
      ],
      "theorie": "Vorsatz heißt: Der Täter will die Tat oder hält sie ernstlich für möglich und findet sich damit ab (§ 5 Abs 1 StGB). Mord und Totschlag sind vorsätzliche Tötungen. Fehlt der Vorsatz, bleibt nur die fahrlässige Tötung (§ 80 StGB).",
      "wiederholung": {
        "frage": "Was braucht man für Mord, aber nicht für fahrlässige Tötung?",
        "optionen": [
          {
            "text": "Vorsatz",
            "richtig": true
          },
          {
            "text": "Einen Toten",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Bleiben wir bei dieser Version: fahrlässige Tötung eines Menschen. Welcher Strafrahmen steht in § 80 Abs 1 StGB?",
      "optionen": [
        {
          "text": "Freiheitsstrafe bis zu 1 Jahr oder Geldstrafe bis zu 720 Tagessätzen",
          "richtig": true,
          "feedback": "Richtig. Das ist der Strafrahmen, wenn ein Mensch fahrlässig getötet wird."
        },
        {
          "text": "Freiheitsstrafe von 5 bis zu 10 Jahren",
          "richtig": false,
          "feedback": "Nein. Das ist der Strafrahmen für Totschlag (§ 76 StGB)."
        },
        {
          "text": "Freiheitsstrafe von 10 bis zu 20 Jahren oder lebenslang",
          "richtig": false,
          "feedback": "Nein. Das ist der Strafrahmen für Mord (§ 75 StGB)."
        }
      ],
      "theorie": "Das Gesetz bestraft vorsätzliche Taten viel strenger als fahrlässige. Für fahrlässige Tötung gibt es höchstens 1 Jahr Freiheitsstrafe oder eine Geldstrafe (§ 80 Abs 1 StGB). Für Mord gibt es mindestens 10 Jahre.",
      "wiederholung": {
        "frage": "Welche Tat wird strenger bestraft?",
        "optionen": [
          {
            "text": "Die vorsätzliche Tötung",
            "richtig": true
          },
          {
            "text": "Die fahrlässige Tötung",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "In der Hauptverhandlung zeigt die Staatsanwältin ein Video aus dem Lokal. Zwei Gäste sagen als Zeugen aus. Alles passt zusammen: Herr Reiter ist nicht gestolpert. Er ging gezielt auf den Kellner los, rief „Dich bring ich um!“ und griff ihn mehrmals heftig an. Was ändert sich?",
      "hinweis": "Was zeigen der Satz „Dich bring ich um!“ und die gezielten Angriffe über seinen Willen?",
      "optionen": [
        {
          "text": "Jetzt liegt eine vorsätzliche Tötung vor: Mord oder Totschlag.",
          "richtig": true,
          "feedback": "Richtig. Video und Zeugen zeigen: Er wollte töten. Damit scheidet fahrlässige Tötung aus."
        },
        {
          "text": "Nichts. Es bleibt fahrlässige Tötung.",
          "richtig": false,
          "feedback": "Nein. Wer gezielt angreift und „Dich bring ich um!“ ruft, handelt nicht bloß unachtsam."
        },
        {
          "text": "Er ist straflos, weil er wütend war.",
          "richtig": false,
          "feedback": "Nein. Wut macht eine Tötung nicht straflos. Sie kann höchstens bei Totschlag eine Rolle spielen."
        }
      ],
      "theorie": "Neue Beweise können die Einschätzung ganz verändern. Das Gericht prüft, was wirklich passiert ist, nicht nur, was der Angeklagte sagt. Will der Täter den Tod, handelt er vorsätzlich (§ 5 Abs 1 StGB).",
      "wiederholung": {
        "frage": "Ein Täter sagt „Ich wollte das nicht“, aber das Video zeigt einen gezielten Angriff. Worauf stützt sich das Gericht?",
        "optionen": [
          {
            "text": "Auf alle Beweise, auch das Video",
            "richtig": true
          },
          {
            "text": "Nur auf die Aussage des Täters",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Der Verteidiger sagt: „Mein Mandant war außer sich vor Wut. Das ist eine heftige Gemütsbewegung. Also ist es Totschlag, nicht Mord.“ Reicht heftige Wut für Totschlag?",
      "hinweis": "Lies § 76 StGB genau: Welches Wort steht vor „heftigen Gemütsbewegung“?",
      "optionen": [
        {
          "text": "Ja. Heftige Wut reicht immer.",
          "richtig": false,
          "feedback": "Nein. Das Gesetz verlangt mehr: Die Gemütsbewegung muss „allgemein begreiflich“ sein."
        },
        {
          "text": "Nein. Die Gemütsbewegung muss auch „allgemein begreiflich“ sein.",
          "richtig": true,
          "feedback": "Richtig. § 76 StGB verlangt eine „allgemein begreifliche heftige Gemütsbewegung“. Heftig allein genügt nicht."
        }
      ],
      "theorie": "§ 76 StGB: „Wer sich in einer allgemein begreiflichen heftigen Gemütsbewegung dazu hinreißen läßt, einen anderen zu töten …“ Es braucht also zwei Dinge: Die Gemütsbewegung ist heftig und sie ist allgemein begreiflich.",
      "wiederholung": {
        "frage": "Welche zwei Merkmale braucht die Gemütsbewegung bei Totschlag?",
        "optionen": [
          {
            "text": "heftig und allgemein begreiflich",
            "richtig": true
          },
          {
            "text": "heftig und lang andauernd",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Jetzt die Kernfrage: Herr Reiter bekam dreimal das falsche Getränk. Ist seine heftige Wut darüber „allgemein begreiflich“?",
      "hinweis": "Stell dir einen durchschnittlichen, rechtstreuen Menschen in derselben Lage vor. Wäre er auch in einen solchen Ausnahmezustand geraten?",
      "optionen": [
        {
          "text": "Ja. Dreimal das falsche Getränk ärgert jeden.",
          "richtig": false,
          "feedback": "Ärgern ja. Aber ein rechtstreuer Durchschnittsmensch gerät deshalb nicht in einen Ausnahmezustand. Die Wut ist übersteigert."
        },
        {
          "text": "Nein. Die Wut steht in keinem Verhältnis zum Anlass.",
          "richtig": true,
          "feedback": "Richtig. Der Anlass ist eine Kleinigkeit. Eine übersteigerte Reaktion ist nicht allgemein begreiflich. Totschlag scheidet aus."
        }
      ],
      "theorie": "Der OGH prüft das Verhältnis zwischen Anlass und Gemütsbewegung. Allgemein begreiflich ist sie nur, wenn sich ein rechtstreuer Durchschnittsmensch vorstellen kann, in dieser Lage auch so zu reagieren. Eine „übersteigerte“ Reaktion ist nicht allgemein begreiflich (RIS-Justiz RS0092259).",
      "wiederholung": {
        "frage": "Wer ist der Maßstab für „allgemein begreiflich“?",
        "optionen": [
          {
            "text": "Ein rechtstreuer Durchschnittsmensch",
            "richtig": true
          },
          {
            "text": "Der Täter selbst",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Urteil",
      "text": "Wegen Mordes entscheidet ein Geschworenengericht, weil Mord mit lebenslanger Freiheitsstrafe bedroht ist (§ 31 Abs 2 Z 1 StPO). Die Geschworenen haben beraten. Welches Urteil passt zu allem, was wir festgestellt haben?",
      "optionen": [
        {
          "text": "Schuldig des Mordes (§ 75 StGB): 10 bis 20 Jahre oder lebenslang",
          "richtig": true,
          "feedback": "Richtig. Er tötete vorsätzlich. Seine Wut war nicht allgemein begreiflich. Also bleibt es bei Mord."
        },
        {
          "text": "Schuldig des Totschlags (§ 76 StGB): 5 bis 10 Jahre",
          "richtig": false,
          "feedback": "Nein. Für Totschlag fehlt die allgemeine Begreiflichkeit der Gemütsbewegung."
        },
        {
          "text": "Schuldig der fahrlässigen Tötung (§ 80 StGB): bis 1 Jahr",
          "richtig": false,
          "feedback": "Nein. Video und Zeugen haben gezeigt, dass er vorsätzlich handelte."
        }
      ],
      "theorie": "Mord ist jede vorsätzliche Tötung, wenn kein milderer Sondertatbestand wie Totschlag greift. Heftige Wut allein macht aus Mord keinen Totschlag. Entscheidend ist, ob die Gemütsbewegung allgemein begreiflich war.",
      "wiederholung": {
        "frage": "Herr Reiter tötete vorsätzlich, aber aus übersteigerter Wut. Welcher Tatbestand?",
        "optionen": [
          {
            "text": "Mord (§ 75 StGB)",
            "richtig": true
          },
          {
            "text": "Totschlag (§ 76 StGB)",
            "richtig": false
          }
        ]
      }
    }
  ],
  "urteil": {
    "spruch": "Herr Kasimir Reiter ist schuldig des Mordes nach § 75 StGB.",
    "strafe": "Fiktiv: 15 Jahre Freiheitsstrafe (Strafrahmen: 10 bis 20 Jahre oder lebenslang).",
    "begruendung": [
      "Video und Zeugen zeigen: Er griff gezielt an und wollte töten. Das ist Vorsatz (§ 5 Abs 1 StGB), keine Fahrlässigkeit.",
      "Seine Wut war heftig, aber nicht allgemein begreiflich: Dreimal das falsche Getränk bringt einen rechtstreuen Durchschnittsmenschen nicht in einen solchen Ausnahmezustand.",
      "Deshalb ist es kein Totschlag (§ 76 StGB), sondern Mord (§ 75 StGB)."
    ]
  },
  "belohnung": {
    "xp": 60,
    "abzeichen": {
      "name": "Affekt-Prüfer",
      "emoji": "⚖️"
    }
  },
  "abschluss": "Gut gemacht! Heftige Wut allein macht aus Mord keinen Totschlag. Die Gemütsbewegung muss auch allgemein begreiflich sein. In Deutschland wäre das nach § 211 StGB (niedriger Beweggrund) zu prüfen – hier gilt österreichisches Recht.",
  "reflexion": {
    "optional": true,
    "titel": "Reflexion (optional, zum Diskutieren)",
    "fragen": [
      "Ist eine Strafe von mindestens 10 Jahren hier zu streng oder angemessen? Begründe deine Meinung.",
      "Warum hat das Gericht bei Mord kaum Spielraum? Denk an die Untergrenze von 10 Jahren und an die Mittel, die es bei kleinen Taten gibt."
    ]
  }
};
