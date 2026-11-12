window.RECHTSFALL = {
  "kennung": "Beispielfall",
  "titel": "Der Laptop mit dem Farbfehler",
  "gebiet": "Privatrecht",
  "thema": "Kaufvertrag",
  "rechtsgebiet": "Vertragsrecht / Gewährleistung",
  "kurzbeschreibung": "Lena kauft im Geschäft einen Laptop. Monate später zeigt der Bildschirm einen Farbfehler. In vier Stationen entscheidest du, was rechtlich gilt.",
  "einleitung": "Lena (22, Studentin) kauft am 3. März 2026 im Geschäft der Elektro Berger GmbH einen neuen Laptop um 799 Euro. Sie zahlt bar und nimmt das Gerät samt Kassabon mit. Einen schriftlichen Vertrag gibt es nicht. Am 20. Oktober 2026 – gut sieben Monate später – bekommt der Bildschirm einen dauerhaften Farbfehler.",
  "hinweis": "Beispielfall zur Beurteilung von Bedienung und Optik. Keine Lieferung des Recht-Bots. Rechtsgrundlagen: ABGB, KSchG, VGG.",
  "stationen": [
    {
      "station": "Vertragsschluss",
      "kurzname": "Vertrag",
      "video": "videos/station1_vertrag.mp4",
      "situationstext": "Lena, 22, Studentin, kauft am 3. März 2026 bei der Elektro Berger GmbH einen Laptop um 799 Euro bar und erhält einen Kassabon, aber keinen schriftlichen Vertrag.",
      "buttons": [
        {
          "id": "s1-richtig",
          "label": "Ja, ein gültiger Kaufvertrag ist zustande gekommen.",
          "bewertung": "richtig",
          "konsequenz": "Angebot und Annahme liegen vor; Zahlung und Übergabe machen den Kauf verbindlich, eine Schriftform ist nicht nötig."
        },
        {
          "id": "s1-falsch",
          "label": "Nein, ohne schriftlichen Vertrag ist der Kauf unwirksam.",
          "bewertung": "falsch",
          "konsequenz": "Das trifft nicht zu: Ein gewöhnlicher Kaufvertrag braucht in Österreich keine Schriftform.",
          "theorie": "Ein Vertrag kommt durch zwei übereinstimmende Willenserklärungen zustande, also durch Angebot und Annahme. Beim gewöhnlichen Kauf gilt Formfreiheit (§ 883 ABGB): Er kann mündlich, schriftlich oder durch schlüssiges Handeln wie Zahlung und Übergabe geschlossen werden. Eine schriftliche Urkunde ist nur bei bestimmten Geschäften nötig, etwa beim Kauf einer Liegenschaft.",
          "wiederholung": {
            "frage": "Braucht ein gewöhnlicher Kauf im Geschäft eine schriftliche Vertragsurkunde?",
            "buttons": [
              {
                "id": "s1-w-falsch",
                "label": "Ja, sonst ist der Kauf unwirksam.",
                "richtig": false,
                "konsequenz": "Noch nicht: Der gewöhnliche Kauf ist formfrei und kann auch mündlich oder durch Zahlung und Übergabe zustande kommen."
              },
              {
                "id": "s1-w-richtig",
                "label": "Nein, er kann auch mündlich oder durch Zahlung und Übergabe zustande kommen.",
                "richtig": true,
                "konsequenz": "Genau: Schriftform ist beim gewöhnlichen Kauf nicht nötig."
              }
            ]
          }
        },
        {
          "id": "s1-uebersehen",
          "label": "Ein Vertrag liegt vor, aber nur als unverbindliche Reservierung, solange Lena den Laptop nicht zu Hause ausprobiert hat.",
          "bewertung": "uebersehen",
          "konsequenz": "Den Vertragsschluss hast du erkannt, die Wirkung aber übersehen: Mit Zahlung und Übergabe ist der Kauf bereits vollständig und verbindlich."
        }
      ],
      "dashboard_zeile": {
        "thema": "Kaufvertrag zustande gekommen?",
        "richtig": "Angebot, Annahme sowie Zahlung und Übergabe reichen; Schriftform ist nicht nötig.",
        "uebersehen": "Du hast den Vertrag gesehen, aber übersehen, dass er mit Zahlung und Übergabe schon verbindlich ist.",
        "falsch": "Der gewöhnliche Kauf ist in Österreich formfrei."
      }
    },
    {
      "station": "Verbrauchergeschäft",
      "kurzname": "Verbraucher",
      "video": "videos/station2_verbraucher.mp4",
      "situationstext": "Lena, 22, Studentin, kauft den Laptop bei der Elektro Berger GmbH im Geschäft für Studium und Freizeit, nicht im Internet.",
      "buttons": [
        {
          "id": "s2-richtig",
          "label": "Ja, das ist ein Verbrauchergeschäft. Es gelten das KSchG und bei Mängeln das Verbrauchergewährleistungsgesetz (VGG).",
          "bewertung": "richtig",
          "konsequenz": "Lena handelt als Verbraucherin, Elektro Berger als Unternehmerin; der Ort des Kaufs ändert daran nichts."
        },
        {
          "id": "s2-falsch",
          "label": "Das KSchG gilt nicht, weil Lena nicht online, sondern im Geschäft gekauft hat.",
          "bewertung": "falsch",
          "konsequenz": "Das ist nicht richtig: Verbraucherrecht hängt nicht davon ab, ob der Kauf im Geschäft oder im Internet stattfindet.",
          "theorie": "Ein Verbrauchergeschäft liegt vor, wenn eine Verbraucherin mit einem Unternehmer einen Vertrag schließt (§ 1 KSchG). Lena kauft privat, Elektro Berger handelt betrieblich – das gilt im Geschäft genauso wie im Internet. Zusätzliche Regeln für Fernabsatz, etwa das Rücktrittsrecht nach dem FAGG, gelten nur bei Online- oder Haustürgeschäften, nicht bei diesem Ladenkauf.",
          "wiederholung": {
            "frage": "Wann gilt das Konsumentenschutzgesetz (KSchG)?",
            "buttons": [
              {
                "id": "s2-w-falsch",
                "label": "Nur bei Käufen im Internet.",
                "richtig": false,
                "konsequenz": "Noch nicht: Das KSchG gilt bei jedem Vertrag zwischen Verbraucherin und Unternehmer, also auch im Geschäft."
              },
              {
                "id": "s2-w-richtig",
                "label": "Immer, wenn eine Verbraucherin mit einem Unternehmer einen Vertrag schließt, egal ob im Geschäft oder online.",
                "richtig": true,
                "konsequenz": "Genau: Entscheidend sind die Rollen der Parteien, nicht der Ort des Kaufs."
              }
            ]
          }
        },
        {
          "id": "s2-uebersehen",
          "label": "Das KSchG gilt nicht, weil Lena den Laptop auch fürs Studium verwendet und deshalb wie eine Unternehmerin behandelt wird.",
          "bewertung": "uebersehen",
          "konsequenz": "Die Nutzung hast du bedacht, aber übersehen: Studium und Freizeit sind keine unternehmerische Tätigkeit, Lena bleibt Verbraucherin."
        }
      ],
      "dashboard_zeile": {
        "thema": "Verbrauchergeschäft?",
        "richtig": "Private Käuferin, Unternehmerin als Verkäuferin, unabhängig vom Ladenkauf.",
        "uebersehen": "Studium und Freizeit machen Lena nicht zur Unternehmerin.",
        "falsch": "Das KSchG gilt auch im Geschäft, nicht nur online."
      }
    },
    {
      "station": "Gewährleistung",
      "kurzname": "Gewährleistung",
      "video": "videos/station3_mangel.mp4",
      "situationstext": "Am 20. Oktober 2026 – gut sieben Monate nach dem Kauf am 3. März 2026 – bekommt Lenas Bildschirm einen dauerhaften Farbfehler; Elektro Berger sagt, die Garantie sei nach sechs Monaten vorbei.",
      "buttons": [
        {
          "id": "s3-richtig",
          "label": "Ja. Die gesetzliche Gewährleistung läuft zwei Jahre. Weil der Fehler im ersten Jahr auftritt, wird außerdem vermutet, dass er schon bei der Übergabe da war.",
          "bewertung": "richtig",
          "konsequenz": "Die sechs Monate betreffen höchstens eine freiwillige Garantie; die gesetzliche Gewährleistung läuft zwei Jahre, und im ersten Jahr greift die Vermutung."
        },
        {
          "id": "s3-falsch",
          "label": "Nein. Nach sechs Monaten ist jeder Anspruch erloschen.",
          "bewertung": "falsch",
          "konsequenz": "Das vermischt Garantie und Gewährleistung: Die gesetzliche Gewährleistung endet nicht nach sechs Monaten.",
          "theorie": "Eine Garantie ist ein freiwilliges Zusatzversprechen und kann kürzer sein. Die gesetzliche Gewährleistung gilt beim Verbraucherkauf über Waren zwei Jahre ab Übergabe (§ 10 VGG) und darf nicht zum Nachteil der Verbraucherin verkürzt werden. Tritt ein Mangel im ersten Jahr auf, wird vermutet, dass er schon bei der Übergabe vorlag (§ 11 VGG); dann muss das Geschäft das Gegenteil beweisen.",
          "wiederholung": {
            "frage": "Wie lange hat Lena beim neuen Laptop gesetzliche Gewährleistung?",
            "buttons": [
              {
                "id": "s3-w-falsch",
                "label": "Sechs Monate, danach nur noch eine allfällige Garantie.",
                "richtig": false,
                "konsequenz": "Noch nicht: Sechs Monate wären nur eine allfällige Garantie, die gesetzliche Gewährleistung läuft zwei Jahre."
              },
              {
                "id": "s3-w-richtig",
                "label": "Zwei Jahre ab Übergabe; im ersten Jahr wird der Mangel bei Übergabe vermutet.",
                "richtig": true,
                "konsequenz": "Genau: Zwei Jahre Gewährleistung, und im ersten Jahr trägt grundsätzlich das Geschäft die Beweislast."
              }
            ]
          }
        },
        {
          "id": "s3-uebersehen",
          "label": "Ja, Gewährleistung gilt zwei Jahre. Lena muss aber selbst beweisen, dass der Farbfehler schon beim Kauf da war.",
          "bewertung": "uebersehen",
          "konsequenz": "Die Frist hast du richtig erkannt, die Beweislast aber übersehen: Im ersten Jahr muss grundsätzlich das Geschäft beweisen, dass der Mangel bei der Übergabe noch nicht da war."
        }
      ],
      "dashboard_zeile": {
        "thema": "Gewährleistung oder nur Garantie?",
        "richtig": "Zwei Jahre Gewährleistung, im ersten Jahr Beweislast beim Geschäft.",
        "uebersehen": "Die Frist stimmt, die Vermutung und Beweislast im ersten Jahr fehlen.",
        "falsch": "Die freiwillige Garantie ist nicht die gesetzliche Gewährleistung."
      }
    },
    {
      "station": "Gewährleistungsbehelfe",
      "kurzname": "Behelfe",
      "video": "videos/station4_behelfe.mp4",
      "situationstext": "Elektro Berger bleibt dabei: Nach sechs Monaten werde nichts gemacht, Lena solle sich an den Hersteller wenden; den Laptop braucht sie zum Lernen.",
      "buttons": [
        {
          "id": "s4-richtig",
          "label": "Lena kann vom Geschäft Verbesserung oder Austausch verlangen. Weil das Geschäft das verweigert, kann sie auch den Preis mindern oder den Vertrag auflösen.",
          "bewertung": "richtig",
          "konsequenz": "Ansprechpartnerin ist die Verkäuferin; nach der Weigerung stehen Lena auch Preisminderung oder Vertragsauflösung zu."
        },
        {
          "id": "s4-falsch",
          "label": "Lena muss sich an den Hersteller wenden, das Geschäft ist nicht mehr zuständig.",
          "bewertung": "falsch",
          "konsequenz": "Das trifft nicht zu: Die gesetzliche Gewährleistung richtet sich gegen die Verkäuferin, nicht gegen den Hersteller.",
          "theorie": "Die gesetzliche Gewährleistung ist eine Pflicht der Verkäuferin; der Hersteller ist nur zuständig, wenn er selbst eine Garantie gegeben hat. Lena kann zuerst zwischen Verbesserung und Austausch wählen (§ 12 Abs. 2 VGG). Verweigert das Geschäft beides, darf sie den Preis mindern oder den Vertrag auflösen (§ 12 Abs. 4 VGG) – außer der Mangel wäre nur geringfügig, was ein dauerhafter Bildschirmfehler nicht ist.",
          "wiederholung": {
            "frage": "Gegen wen richtet sich die gesetzliche Gewährleistung?",
            "buttons": [
              {
                "id": "s4-w-falsch",
                "label": "Nur gegen den Hersteller.",
                "richtig": false,
                "konsequenz": "Noch nicht: Gewährleistung richtet sich gegen die Verkäuferin, der Hersteller haftet nur aus einer allfälligen Garantie."
              },
              {
                "id": "s4-w-richtig",
                "label": "Gegen die Verkäuferin; der Hersteller haftet nur aus einer allfälligen Garantie.",
                "richtig": true,
                "konsequenz": "Genau: Zuständig ist Elektro Berger als Verkäuferin."
              }
            ]
          }
        },
        {
          "id": "s4-uebersehen",
          "label": "Lena kann nur eine Reparatur verlangen, mehr steht ihr nicht zu.",
          "bewertung": "uebersehen",
          "konsequenz": "Die Gewährleistung hast du erkannt, zwei Punkte aber übersehen: Lena darf zwischen Verbesserung und Austausch wählen, und nach der Weigerung auch den Preis mindern oder den Vertrag auflösen."
        }
      ],
      "dashboard_zeile": {
        "thema": "Was kann Lena verlangen – und von wem?",
        "richtig": "Ansprechpartnerin ist die Verkäuferin; nach der Weigerung auch Preisminderung oder Auflösung.",
        "uebersehen": "Wahlrecht und sekundäre Behelfe nach der Weigerung fehlen.",
        "falsch": "Gewährleistung richtet sich gegen das Geschäft, nicht gegen den Hersteller."
      }
    }
  ]
};
