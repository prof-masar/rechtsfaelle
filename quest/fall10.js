/* Fall 10 unverändert aus recht_fall10.json (Inhalt nach JUSTIZIA Akte 05 „Schwarz und 50 Stunden“) */
window.FALL10 = {
 "id": "recht-fall10-arbeit",
 "fach": "Recht",
 "gebiet": "Arbeit und Unternehmen",
 "klasse": "Arbeitsrecht",
 "titel": "Schwarz und 50 Stunden",
 "quelle_justizia": "Akte 05 „Schwarz und 50 Stunden“",
 "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
 "einleitung": "Samira ist 19 und arbeitet seit 8 Monaten in einem Café, fünf Tage pro Woche und oft 50 Stunden. Den Lohn bekommt sie bar. Einen Dienstzettel hat sie nie bekommen, zur Sozialversicherung ist sie nicht angemeldet. „Wir sind wie eine Familie“, sagt der Chef.",
 "figur": {
  "name": "Justizia",
  "rolle": "Rechtsberatung",
  "emoji": "⚖️",
  "farbe": "#2f4f7f"
 },
 "stand": "2026-11-24",
 "rechtsstand": "November 2026",
 "hauptnormen": [
  "§ 1151 ABGB",
  "§ 33 ASVG",
  "§§ 3, 9, 10 AZG",
  "§ 1162b ABGB"
 ],
 "quellen": [
  "§ 1151 ABGB (Arbeitsvertrag)",
  "§ 2 Abs 1 AVRAG (Dienstzettel)",
  "§ 33 ASVG (Anmeldung)",
  "§ 111 ASVG (Strafen)",
  "§ 3 AZG (Normalarbeitszeit)",
  "§ 9 AZG (Höchstgrenzen)",
  "§ 10 AZG (Überstundenzuschlag)",
  "§ 4 EFZG (Meldung des Krankenstands)",
  "§ 2 UrlG (Urlaub)",
  "§ 1162b ABGB (Kündigungsentschädigung, Arbeiter)",
  "§ 29 AngG (Kündigungsentschädigung, Angestellte)",
  "Kollektivvertrag Hotel- und Gastgewerbe"
 ],
 "schritte": [
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Samira fragt: „Habe ich überhaupt einen Arbeitsvertrag? Ich habe nie etwas unterschrieben.“",
   "optionen": [
    {
     "text": "Ja. Ein Arbeitsvertrag braucht keine Unterschrift. Sie arbeitet nach Weisung im Café.",
     "richtig": true,
     "feedback": "Richtig. Ein Arbeitsvertrag ist formfrei (§ 1151 ABGB). Wer nach Weisung, persönlich und im Betrieb arbeitet, ist Arbeitnehmerin."
    },
    {
     "text": "Nein. Ohne Unterschrift ist sie nur Aushilfe ohne Rechte.",
     "richtig": false,
     "feedback": "Nein. Auch ohne Papier besteht ein Arbeitsverhältnis mit allen Rechten."
    },
    {
     "text": "Nur wenn der Chef sie bei der Sozialversicherung anmeldet.",
     "richtig": false,
     "feedback": "Nein. Die Anmeldung ist eine Pflicht des Chefs. Der Vertrag besteht aber auch ohne sie."
    }
   ],
   "theorie": "Ein Arbeitsvertrag entsteht durch Einigung, auch mündlich oder durch tatsächliches Arbeiten (§ 1151 ABGB). Typisch ist persönliche Abhängigkeit: Man arbeitet nach Weisungen, zu festen Zeiten und im Betrieb des Arbeitgebers. Der Arbeitgeber muss unverzüglich nach Beginn einen Dienstzettel mit den wichtigsten Daten ausstellen, auf Wunsch auch elektronisch (§ 2 Abs 1 AVRAG). Fehlt er, gilt der Vertrag trotzdem.",
   "wiederholung": {
    "frage": "Gilt ein Arbeitsvertrag auch ohne Dienstzettel?",
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
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Der Chef hat Samira nicht bei der Sozialversicherung angemeldet. Wer ist dafür verantwortlich?",
   "optionen": [
    {
     "text": "Der Arbeitgeber. Er muss sie vor Arbeitsbeginn anmelden.",
     "richtig": true,
     "feedback": "Richtig. Der Arbeitgeber muss Beschäftigte vor Arbeitsantritt bei der Österreichischen Gesundheitskasse anmelden (§ 33 ASVG)."
    },
    {
     "text": "Samira selbst",
     "richtig": false,
     "feedback": "Nein. Die Anmeldung ist die Pflicht des Arbeitgebers. Ohne Anmeldung fehlt Samira der Schutz bei Krankheit und Unfall."
    },
    {
     "text": "Niemand. Bei Barlohn braucht es keine Anmeldung.",
     "richtig": false,
     "feedback": "Nein. Auch bei Barzahlung muss angemeldet werden. Sonst ist es Schwarzarbeit, und der Chef riskiert Strafen."
    }
   ],
   "theorie": "Die Pflichtversicherung umfasst Kranken-, Unfall- und Pensionsversicherung, dazu die Arbeitslosenversicherung. Der Arbeitgeber muss vor Arbeitsantritt anmelden (§ 33 ASVG). Wer schwarz beschäftigt, spart Beiträge auf Kosten der Arbeitnehmerin und riskiert Verwaltungsstrafen (§ 111 ASVG).",
   "wiederholung": {
    "frage": "Wann muss der Arbeitgeber anmelden?",
    "optionen": [
     {
      "text": "Vor Arbeitsbeginn",
      "richtig": true
     },
     {
      "text": "Erst nach einem Jahr",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Samira arbeitet oft 50 Stunden pro Woche. Für die Stunden über 40 bekommt sie nichts extra. Was gilt?",
   "hinweis": "Wie viele Stunden pro Woche sind die Normalarbeitszeit?",
   "optionen": [
    {
     "text": "Überstunden müssen mit Zuschlag bezahlt oder mit Zeitausgleich abgegolten werden.",
     "richtig": true,
     "feedback": "Richtig. Für Überstunden gibt es einen Zuschlag von 50 Prozent oder Zeitausgleich (§ 10 AZG)."
    },
    {
     "text": "Das gehört in der Gastronomie einfach dazu.",
     "richtig": false,
     "feedback": "Nein. Auch in der Gastronomie gilt das Arbeitszeitgesetz. Überstunden sind keine Gratisarbeit."
    },
    {
     "text": "Jede Minute über 40 Stunden ist verboten.",
     "richtig": false,
     "feedback": "Zu streng. Überstunden sind erlaubt, aber nur bis zu Höchstgrenzen und mit Zuschlag."
    }
   ],
   "theorie": "Die Normalarbeitszeit beträgt 8 Stunden am Tag und 40 Stunden pro Woche (§ 3 AZG). Zusätzlich gilt der Kollektivvertrag Hotel- und Gastgewerbe (z. B. 40-Stunden-Woche). Arbeit darüber sind Überstunden, mit 50 Prozent Zuschlag oder Zeitausgleich (§ 10 AZG). Erlaubt sind höchstens 12 Stunden am Tag und 60 Stunden pro Woche, im Durchschnitt höchstens 48 Stunden (§ 9 AZG).",
   "wiederholung": {
    "frage": "Wie hoch ist der gesetzliche Überstundenzuschlag?",
    "optionen": [
     {
      "text": "50 Prozent",
      "richtig": true
     },
     {
      "text": "0 Prozent",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 2 – Weiterdenken",
   "text": "Samira ist zwei Tage krank. Was muss sie tun?",
   "optionen": [
    {
     "text": "Den Krankenstand sofort melden und auf Verlangen eine ärztliche Bestätigung bringen",
     "richtig": true,
     "feedback": "Richtig. Sie muss den Krankenstand ohne Verzug melden und auf Verlangen eine Bestätigung vorlegen (§ 4 EFZG)."
    },
    {
     "text": "Den Chef um Erlaubnis bitten, krank sein zu dürfen",
     "richtig": false,
     "feedback": "Nein. Krank sein braucht keine Erlaubnis. Samira muss es nur melden."
    },
    {
     "text": "Nichts. Sie bleibt einfach zu Hause.",
     "richtig": false,
     "feedback": "Nicht ganz. Ihr Lohn läuft weiter, aber sie muss den Krankenstand sofort melden."
    }
   ],
   "theorie": "Bei Krankheit bekommt die Arbeitnehmerin für eine bestimmte Zeit ihr Entgelt weiter (Entgeltfortzahlung). Sie muss den Krankenstand ohne Verzug melden. Auf Verlangen muss sie eine ärztliche Bestätigung vorlegen (§ 4 EFZG, für Angestellte § 8 AngG).",
   "wiederholung": {
    "frage": "Braucht Samira die Erlaubnis des Chefs, um krank zu sein?",
    "optionen": [
     {
      "text": "Nein, sie muss es nur melden",
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
   "text": "Am Freitag sagt der Chef: „Ab Montag brauchst du nicht mehr kommen.“ Einen wichtigen Grund gibt es nicht. Die Probezeit ist längst vorbei. Was ist das rechtlich?",
   "optionen": [
    {
     "text": "Eine Entlassung ohne Grund. Samira bekommt Kündigungsentschädigung.",
     "richtig": true,
     "feedback": "Richtig. Ohne wichtigen Grund darf er sie nicht sofort hinauswerfen. Samira bekommt ihr Entgelt bis zum Ende der Kündigungsfrist (§ 1162b ABGB, für Angestellte § 29 AngG)."
    },
    {
     "text": "Eine wirksame Kündigung ohne weitere Folgen",
     "richtig": false,
     "feedback": "Nein. Eine Kündigung braucht eine Frist. Hält der Chef sie nicht ein, muss er Samira bis zum Ende der Frist bezahlen."
    },
    {
     "text": "Ein Austritt von Samira",
     "richtig": false,
     "feedback": "Nein. Ein Austritt ist, wenn die Arbeitnehmerin selbst sofort geht. Hier will der Chef sie loswerden."
    }
   ],
   "theorie": "Kündigung: Das Arbeitsverhältnis endet nach einer Frist, ein Grund ist meist nicht nötig. Entlassung: sofortiges Ende durch den Arbeitgeber, nur aus wichtigem Grund. Austritt: sofortiges Ende durch die Arbeitnehmerin, nur aus wichtigem Grund. Wer ohne Grund sofort hinausgeworfen wird, bekommt Kündigungsentschädigung: als Arbeiterin oder Arbeiter nach § 1162b ABGB, als Angestellte oder Angestellter nach § 29 AngG. Kostenlose Hilfe gibt es bei der Arbeiterkammer.",
   "wiederholung": {
    "frage": "Was unterscheidet Kündigung und Entlassung?",
    "optionen": [
     {
      "text": "Kündigung mit Frist, Entlassung sofort und nur aus wichtigem Grund",
      "richtig": true
     },
     {
      "text": "Es gibt keinen Unterschied",
      "richtig": false
     }
    ]
   }
  }
 ],
 "ergebnis": {
  "art": "Arbeitsverhältnis mit allen Rechten",
  "inhalt": "Samira hat einen gültigen Arbeitsvertrag. Ihr stehen Anmeldung, Überstundenzuschläge, Entgeltfortzahlung und Kündigungsentschädigung zu.",
  "begruendung": [
   "Der Arbeitsvertrag ist formfrei, der fehlende Dienstzettel ändert daran nichts (§ 1151 ABGB, § 2 Abs 1 AVRAG).",
   "Überstunden über 40 Wochenstunden sind mit 50 Prozent Zuschlag abzugelten (§ 3, § 10 AZG). Urlaub: fünf Wochen pro Jahr (§ 2 UrlG).",
   "Die Entlassung ohne wichtigen Grund löst Kündigungsentschädigung aus (§ 1162b ABGB; für Angestellte § 29 AngG)."
  ]
 },
 "reflexion": {
  "optional": true,
  "titel": "Reflexion (optional, zum Diskutieren)",
  "fragen": [
   "„Wir sind wie eine Familie“: Warum ist dieser Satz im Arbeitsrecht gefährlich?",
   "Was spricht für, was gegen einen Job ohne Anmeldung, aus Sicht der Arbeitnehmerin?"
  ]
 },
 "belohnung": {
  "xp": 50,
  "abzeichen": {
   "name": "Arbeitsrecht-Ass",
   "emoji": "💼"
  }
 },
 "abschluss": "Sehr gut! Ein Arbeitsvertrag gilt auch ohne Papier. Anmeldung, Überstundenzuschlag und Schutz bei Kündigung sind Rechte, keine Geschenke."
};
window.FAELLE = window.FAELLE || [];
window.FAELLE.push(window.FALL10);
