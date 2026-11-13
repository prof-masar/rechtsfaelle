/* Fall 2 unverändert aus /workspace/quest/recht_fall2/recht_fall2.json */
window.FALL2 = {
  "id": "recht-fall2-fahrrad",
  "fach": "Recht",
  "klasse": "HLW, Strafrecht",
  "titel": "Das Fahrrad im Gras",
  "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
  "einleitung": "Bastian Wöss ist 19. Im Park sieht er ein Fahrrad im Gras liegen, ohne Schloss. Niemand ist in der Nähe. Das Rad ist etwa 450 Euro wert. Bastian nimmt es mit und behält es. Zwei Wochen später erkennt die Besitzerin ihr Rad. Du begleitest das Strafverfahren.",
  "figur": {
    "name": "Richter Haslinger",
    "rolle": "Strafgericht",
    "emoji": "⚖️",
    "farbe": "#2f4f7f"
  },
  "stand": "2026-11-13",
  "quellen": [
    "§ 127 StGB (Diebstahl)",
    "§ 128 Abs 1 Z 5 StGB (schwerer Diebstahl)",
    "§ 134 StGB (Unterschlagung)",
    "RIS-Justiz RS0093601",
    "RIS-Justiz RS0093841",
    "§ 191 StPO",
    "§ 198 StPO",
    "§ 43 StGB"
  ],
  "schritte": [
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Bastian sagt: „Das Rad lag einfach herum. Ich dachte, jemand hat es verloren.“ Angenommen, das Rad war wirklich verloren: Welche Straftat kommt in Frage, weil er es behalten hat?",
      "hinweis": "Diebstahl heißt: etwas jemandem wegnehmen. Hatte bei einer verlorenen Sache noch jemand die Sache in seiner Gewalt?",
      "optionen": [
        {
          "text": "Unterschlagung (§ 134 StGB), die „Fundunterschlagung“",
          "richtig": true,
          "feedback": "Richtig. Wer ein gefundenes fremdes Gut behält, um sich zu bereichern, begeht Unterschlagung."
        },
        {
          "text": "Diebstahl (§ 127 StGB)",
          "richtig": false,
          "feedback": "Nein. Diebstahl heißt Wegnehmen. Eine verlorene Sache hat aber gerade niemand in seiner Gewalt."
        },
        {
          "text": "Gar keine. Wer etwas findet, darf es behalten.",
          "richtig": false,
          "feedback": "Nein. Ein gefundenes Rad bleibt fremd. Wer es sich zueignet, macht sich strafbar."
        }
      ],
      "theorie": "§ 134 Abs 1 StGB bestraft, wer ein fremdes Gut, das er gefunden hat, mit Bereicherungsvorsatz behält. Diebstahl (§ 127 StGB) verlangt dagegen, dass man die Sache jemandem wegnimmt. Bei einer verlorenen Sache gibt es niemanden, dem man sie wegnimmt.",
      "wiederholung": {
        "frage": "Was braucht Diebstahl, aber nicht die Fundunterschlagung?",
        "optionen": [
          {
            "text": "Ein Wegnehmen",
            "richtig": true
          },
          {
            "text": "Eine fremde Sache",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 1 – Erste Einschätzung",
      "text": "Bleiben wir bei der Fundunterschlagung. Das Rad ist 450 Euro wert. Welcher Strafrahmen steht in § 134 Abs 1 StGB?",
      "optionen": [
        {
          "text": "Freiheitsstrafe bis zu 6 Monaten oder Geldstrafe bis zu 360 Tagessätzen",
          "richtig": true,
          "feedback": "Richtig. Das ist der Grundstrafrahmen der Unterschlagung."
        },
        {
          "text": "Freiheitsstrafe bis zu 2 Jahren",
          "richtig": false,
          "feedback": "Nein. Das gilt erst, wenn das Gut mehr als 5.000 Euro wert ist (§ 134 Abs 3)."
        },
        {
          "text": "Freiheitsstrafe von 1 bis zu 10 Jahren",
          "richtig": false,
          "feedback": "Nein. So hoch ist der Strafrahmen nicht einmal beim Diebstahl über 300.000 Euro."
        }
      ],
      "theorie": "Viele Vermögensdelikte haben Wertgrenzen. Bei der Unterschlagung steigt der Strafrahmen erst, wenn das Gut mehr als 5.000 Euro wert ist (§ 134 Abs 3 StGB). Ein Rad um 450 Euro liegt weit darunter.",
      "wiederholung": {
        "frage": "Ab welchem Wert wird die Unterschlagung strenger bestraft?",
        "optionen": [
          {
            "text": "Über 5.000 Euro",
            "richtig": true
          },
          {
            "text": "Über 450 Euro",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "In der Verhandlung sagt die Besitzerin, Frau Ilvy Hasenöhrl, aus: „Ich habe das Rad selbst ins Gras gelegt. Ich war 20 Minuten mit meinem Neffen am Spielplatz daneben. Ich wusste genau, wo es liegt.“ Ein Zeuge sagt: Bastian hat gesehen, wie sie das Rad hinlegte. Was bedeutet das?",
      "hinweis": "Muss man direkt neben einer Sache stehen, damit sie noch einem gehört und man über sie verfügt?",
      "optionen": [
        {
          "text": "Das Rad war nicht verloren. Frau Hasenöhrl hatte es noch in ihrer Gewalt.",
          "richtig": true,
          "feedback": "Richtig. Sie konnte jederzeit zurückkommen und darüber verfügen. Das Rad war nur abgestellt."
        },
        {
          "text": "Das Rad war trotzdem verloren, weil es kein Schloss hatte.",
          "richtig": false,
          "feedback": "Nein. Ein fehlendes Schloss macht ein Rad nicht verloren. Entscheidend ist, ob noch jemand darüber verfügen kann."
        }
      ],
      "theorie": "Der OGH sagt: Für den Gewahrsam muss man nicht ständig neben der Sache stehen. Es reicht, dass man noch über sie verfügen kann, ein „gelockerter Gewahrsam“ genügt (RIS-Justiz RS0093841).",
      "wiederholung": {
        "frage": "Frau H. stellt ihr Rad kurz ab und geht auf den Spielplatz daneben. Hat sie noch Gewahrsam?",
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
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Das Rad war also nur abgestellt und nicht verloren. Bastian hat es trotzdem mitgenommen und behalten. Welche Straftat liegt jetzt vor?",
      "optionen": [
        {
          "text": "Diebstahl (§ 127 StGB)",
          "richtig": true,
          "feedback": "Richtig. Er wusste, dass das Rad ihr gehört und sie in der Nähe ist. Trotzdem nahm er es weg."
        },
        {
          "text": "Weiter Fundunterschlagung (§ 134 StGB)",
          "richtig": false,
          "feedback": "Nein. Gefunden hat man nur, was in niemandes Gewahrsam ist. Dieses Rad war es nicht."
        },
        {
          "text": "Sachbeschädigung (§ 125 StGB)",
          "richtig": false,
          "feedback": "Nein. Das Rad wurde nicht beschädigt. Bastian hat es weggenommen und behalten."
        }
      ],
      "theorie": "Der OGH grenzt so ab: Stand die Sache zur Tatzeit im Gewahrsam einer anderen Person, ist es Diebstahl. Stand sie in niemandes Gewahrsam, ist es Fundunterschlagung (RIS-Justiz RS0093601).",
      "wiederholung": {
        "frage": "Eine Sache ist in niemandes Gewahrsam und wird behalten. Was ist das?",
        "optionen": [
          {
            "text": "Fundunterschlagung",
            "richtig": true
          },
          {
            "text": "Diebstahl",
            "richtig": false
          }
        ]
      }
    },
    {
      "abschnitt": "Teil 2 – Die Verhandlung",
      "text": "Die Staatsanwältin prüft noch: Ist es ein schwerer Diebstahl wegen des Werts? Das Rad ist 450 Euro wert.",
      "optionen": [
        {
          "text": "Nein. Wegen des Werts wäre es erst über 5.000 Euro ein schwerer Diebstahl.",
          "richtig": true,
          "feedback": "Richtig. § 128 Abs 1 Z 5 StGB: schwerer Diebstahl an einer Sache, deren Wert 5.000 Euro übersteigt."
        },
        {
          "text": "Ja. Alles über 300 Euro ist schwerer Diebstahl.",
          "richtig": false,
          "feedback": "Nein. Die Wertgrenze liegt bei 5.000 Euro (§ 128 Abs 1 Z 5 StGB)."
        }
      ],
      "theorie": "§ 127 StGB: Diebstahl, Freiheitsstrafe bis zu 6 Monaten oder Geldstrafe bis zu 360 Tagessätzen. Erst über 5.000 Euro wird es schwerer Diebstahl, mit Freiheitsstrafe bis zu 3 Jahren (§ 128 Abs 1 Z 5 StGB).",
      "wiederholung": {
        "frage": "Welcher Strafrahmen gilt für den Diebstahl des Rads?",
        "optionen": [
          {
            "text": "Bis 6 Monate oder Geldstrafe",
            "richtig": true
          },
          {
            "text": "Bis 3 Jahre",
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
          "text": "Schuldig des Diebstahls (§ 127 StGB): bis 6 Monate oder Geldstrafe bis 360 Tagessätze",
          "richtig": true,
          "feedback": "Richtig. Das Rad war im Gewahrsam der Besitzerin. Bastian hat es weggenommen. Der Wert liegt unter 5.000 Euro."
        },
        {
          "text": "Schuldig der Fundunterschlagung (§ 134 StGB)",
          "richtig": false,
          "feedback": "Nein. Das Rad war nicht verloren, sondern nur abgestellt."
        },
        {
          "text": "Schuldig des schweren Diebstahls (§ 128 StGB)",
          "richtig": false,
          "feedback": "Nein. Der Wert von 450 Euro liegt unter der Grenze von 5.000 Euro."
        }
      ],
      "theorie": "Ob Diebstahl oder Fundunterschlagung, hängt am Gewahrsam: Hatte jemand die Sache noch in seiner Gewalt? Die Strafrahmen von § 127 und § 134 Abs 1 sind übrigens gleich hoch. Der Unterschied liegt im Unrecht: Wegnehmen oder Behalten.",
      "wiederholung": {
        "frage": "Was entscheidet zwischen Diebstahl und Fundunterschlagung?",
        "optionen": [
          {
            "text": "Ob die Sache noch in jemandes Gewahrsam war",
            "richtig": true
          },
          {
            "text": "Ob die Sache ein Schloss hatte",
            "richtig": false
          }
        ]
      }
    }
  ],
  "urteil": {
    "spruch": "Bastian Wöss ist schuldig des Diebstahls nach § 127 StGB.",
    "strafe": "Fiktiv: Geldstrafe von 60 Tagessätzen (Strafrahmen: bis 6 Monate Freiheitsstrafe oder Geldstrafe bis 360 Tagessätze).",
    "begruendung": [
      "Das Rad war nicht verloren, sondern nur kurz abgestellt. Frau Hasenöhrl hatte noch Gewahrsam.",
      "Bastian wusste das, weil er gesehen hat, wie sie das Rad hinlegte. Er hat es weggenommen und behalten, um sich zu bereichern. Das ist Diebstahl, keine Fundunterschlagung.",
      "Der Wert liegt unter 5.000 Euro, daher kein schwerer Diebstahl."
    ]
  },
  "reflexion": {
    "optional": true,
    "titel": "Reflexion (optional, zum Diskutieren)",
    "fragen": [
      "Ein Rad um 450 Euro, ein junger Täter ohne Vorstrafen: Ist eine Verurteilung hier zu streng oder passend?",
      "Formal strafbar, aber eher kleine Schuld: Welche Wege kennt das österreichische Recht, damit nicht jede kleine Tat mit einer Verurteilung endet?"
    ]
  },
  "belohnung": {
    "xp": 60,
    "abzeichen": {
      "name": "Gewahrsams-Profi",
      "emoji": "🚲"
    }
  },
  "abschluss": "Gut gemacht! Verloren ist nur, was niemand mehr in seiner Gewalt hat. Ein kurz abgestelltes Rad wegzunehmen ist Diebstahl, nicht Fundunterschlagung."
};
window.FAELLE = window.FAELLE || [];
window.FAELLE.push(window.FALL2);
