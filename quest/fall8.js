/* Fall 8 unverändert aus recht_fall8.json (Inhalt nach JUSTIZIA Akte 03 „Die Fake-AirPods“) */
window.FALL8 = {
 "id": "recht-fall8-onlinekauf",
 "fach": "Recht",
 "gebiet": "Privatrecht im Alltag",
 "klasse": "Gewährleistung · Online-Kauf",
 "titel": "Der Lautsprecher, der schweigt",
 "quelle_justizia": "Akte 03 „Die Fake-AirPods“",
 "vorab_hinweis": "Fiktiver Lernfall. Personen und Geschehen sind erfunden. Es gilt österreichisches Recht.",
 "einleitung": "Max ist 19. Er bestellt in einem Online-Shop einen kabellosen Lautsprecher um 89 Euro. Der Shop gehört einer Firma mit Impressum. Max kauft privat. Nach drei Tagen kommt das Paket.",
 "figur": {
  "name": "Justizia",
  "rolle": "Rechtsberatung",
  "emoji": "⚖️",
  "farbe": "#2f4f7f"
 },
 "stand": "2026-11-24",
 "rechtsstand": "November 2026",
 "hauptnormen": [
  "§ 861 ABGB",
  "§ 11 FAGG",
  "§§ 10–12 VGG",
  "§ 3 VGG"
 ],
 "quellen": [
  "§ 861 ABGB (Vertragsabschluss)",
  "§ 883 ABGB (Formfreiheit)",
  "§ 1 KSchG (Verbraucher, Unternehmer)",
  "§ 11 FAGG (Rücktrittsrecht 14 Tage)",
  "§ 13a FAGG (Rücktrittsfunktion online, für Verträge nach dem 30.9.2026: § 20 Abs 5 FAGG, BGBl I 59/2026)",
  "§ 18 FAGG (Ausnahmen)",
  "§ 9a KSchG (Garantie)",
  "§ 3 VGG (zwingendes Recht)",
  "§ 10 VGG (Gewährleistungsfrist, Abs 2a Verlängerung)",
  "§ 11 VGG (Vermutung)",
  "§ 12 VGG (Abhilfen, Abs 2a Information)",
  "§ 29 Abs 4 VGG (Inkrafttreten Abs 2a: Verträge nach dem 30.9.2026, BGBl I 60/2026)",
  "§ 864a ABGB (überraschende Klauseln)",
  "§ 879 Abs 3 ABGB (gröblich benachteiligende Klauseln)"
 ],
 "schritte": [
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Max hat auf „Zahlungspflichtig bestellen“ geklickt. Der Shop hat die Bestellung per E-Mail angenommen. Gibt es einen Vertrag, obwohl Max nichts unterschrieben hat?",
   "optionen": [
    {
     "text": "Ja. Angebot und Annahme passen zusammen. Eine Unterschrift braucht es nicht.",
     "richtig": true,
     "feedback": "Richtig. Ein Vertrag entsteht durch übereinstimmende Willenserklärungen (§ 861 ABGB). Ein Klick kann reichen."
    },
    {
     "text": "Nein. Ohne Unterschrift gibt es keinen Vertrag.",
     "richtig": false,
     "feedback": "Nein. Die meisten Verträge sind formfrei. Eine Unterschrift braucht es nur in Ausnahmefällen."
    },
    {
     "text": "Erst wenn Max den Lautsprecher in der Hand hat.",
     "richtig": false,
     "feedback": "Nein. Der Vertrag entsteht schon mit der Einigung. Die Lieferung ist bereits die Erfüllung."
    }
   ],
   "theorie": "Ein Vertrag entsteht, wenn zwei Willenserklärungen übereinstimmen: Angebot und Annahme (§ 861 ABGB). Verträge sind grundsätzlich formfrei (§ 883 ABGB). Ein Klick oder eine E-Mail reichen also.",
   "wiederholung": {
    "frage": "Wodurch entsteht ein Vertrag?",
    "optionen": [
     {
      "text": "Durch Angebot und Annahme",
      "richtig": true
     },
     {
      "text": "Nur durch eine Unterschrift",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Der Lautsprecher ist seit 6 Tagen da. Max gefällt der Klang nicht. Darf er ohne Grund vom Vertrag zurücktreten?",
   "hinweis": "Max kauft privat, der Shop ist ein Unternehmen.",
   "optionen": [
    {
     "text": "Ja. Beim Online-Kauf hat er 14 Tage Rücktrittsrecht, ohne Grund.",
     "richtig": true,
     "feedback": "Richtig. Verbraucher können vom Online-Kauf beim Unternehmer binnen 14 Tagen ohne Grund zurücktreten (§ 11 FAGG)."
    },
    {
     "text": "Nein. Gekauft ist gekauft.",
     "richtig": false,
     "feedback": "Nein. Für Online-Käufe von Verbrauchern bei Unternehmern gibt es ein Rücktrittsrecht (§ 11 FAGG)."
    },
    {
     "text": "Ja, aber nur, wenn der Lautsprecher kaputt ist.",
     "richtig": false,
     "feedback": "Nicht ganz. Der Rücktritt nach dem FAGG braucht keinen Grund. Ein Mangel ist eine eigene Frage: die Gewährleistung."
    }
   ],
   "theorie": "Das FAGG schützt Verbraucher, die bei Unternehmern im Fernabsatz kaufen, zum Beispiel im Online-Shop. Sie können binnen 14 Tagen ohne Grund zurücktreten (§ 11 Abs 1 FAGG). Bei Waren beginnt die Frist, wenn man die Ware erhält. Bei Verträgen, die nach dem 30. September 2026 geschlossen wurden, muss der Online-Shop dafür eine Rücktrittsfunktion wie „Vertrag widerrufen“ anbieten (§ 13a FAGG; § 20 Abs 5 FAGG, BGBl I 59/2026). Ausnahmen gibt es zum Beispiel für Maßanfertigungen oder entsiegelte Hygieneartikel (§ 18 FAGG).",
   "wiederholung": {
    "frage": "Wie lange dauert das Rücktrittsrecht beim Online-Kauf grundsätzlich?",
    "optionen": [
     {
      "text": "14 Tage",
      "richtig": true
     },
     {
      "text": "Zwei Jahre",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 1 – Der Fall",
   "text": "Max behält den Lautsprecher doch. Nach 5 Monaten geht er plötzlich nicht mehr. Max hat ihn nicht fallen lassen. Was kann Max zuerst verlangen?",
   "optionen": [
    {
     "text": "Reparatur oder Austausch",
     "richtig": true,
     "feedback": "Richtig. Zuerst kann Max Verbesserung oder Austausch verlangen (§ 12 Abs 2 VGG). Er darf zwischen beiden wählen."
    },
    {
     "text": "Sofort das ganze Geld zurück",
     "richtig": false,
     "feedback": "Noch nicht. Geld zurück gibt es erst, wenn Reparatur und Austausch nicht möglich sind oder nicht klappen (§ 12 VGG)."
    },
    {
     "text": "Gar nichts, die 14 Tage sind vorbei.",
     "richtig": false,
     "feedback": "Nein. Die 14 Tage gelten nur für den Rücktritt. Gewährleistung gibt es zwei Jahre lang (§ 10 VGG)."
    }
   ],
   "theorie": "Gewährleistung heißt: Der Unternehmer haftet dafür, dass die Ware bei der Übergabe mangelfrei ist. Bei Verbrauchern gilt das VGG: Die Frist beträgt zwei Jahre ab Übergabe (§ 10 VGG). Zeigt sich ein Mangel im ersten Jahr, wird vermutet, dass er schon bei der Übergabe da war (§ 11 VGG). Zuerst gibt es Verbesserung oder Austausch, erst danach Preisminderung oder Auflösung des Vertrags (§ 12 VGG). Neu für Verträge nach dem 30. September 2026: Wird der Mangel durch Verbesserung behoben, verlängert sich die Gewährleistungsfrist einmal um ein Jahr (§ 10 Abs 2a VGG). Vorher muss der Unternehmer über das Wahlrecht und diese Verlängerung informieren (§ 12 Abs 2a VGG; § 29 Abs 4 VGG, BGBl I 60/2026).",
   "wiederholung": {
    "frage": "Wie lange dauert die Gewährleistung beim Kauf von einem Unternehmer?",
    "optionen": [
     {
      "text": "Zwei Jahre",
      "richtig": true
     },
     {
      "text": "14 Tage",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 2 – Weiterdenken",
   "text": "Der Shop schreibt: „Wenden Sie sich an den Hersteller. Der gibt Garantie.“ Muss Max das tun?",
   "optionen": [
    {
     "text": "Nein. Der Shop als Verkäufer muss Gewähr leisten. Die Garantie ist nur ein Extra.",
     "richtig": true,
     "feedback": "Richtig. Gewährleistung schuldet der Vertragspartner, also der Shop. Eine Garantie des Herstellers kommt freiwillig dazu (§ 9a Abs 2 KSchG)."
    },
    {
     "text": "Ja. Gibt es eine Garantie, fällt die Gewährleistung weg.",
     "richtig": false,
     "feedback": "Nein. Eine Garantie ersetzt die Gewährleistung nicht. Max kann sich aussuchen, was er nutzt."
    },
    {
     "text": "Ja, weil der Hersteller den Lautsprecher gebaut hat.",
     "richtig": false,
     "feedback": "Nein. Max hat keinen Vertrag mit dem Hersteller. Gewähr leistet der Shop, bei dem er gekauft hat."
    }
   ],
   "theorie": "Gewährleistung steht im Gesetz. Sie trifft den Verkäufer, mit dem man den Vertrag hat. Eine Garantie ist ein freiwilliges Versprechen, oft vom Hersteller (§ 9a KSchG, Herstellergarantie § 9a Abs 2 KSchG). Sie kommt zur Gewährleistung dazu und nimmt Max keine Rechte weg.",
   "wiederholung": {
    "frage": "Wer muss Gewähr leisten?",
    "optionen": [
     {
      "text": "Der Verkäufer",
      "richtig": true
     },
     {
      "text": "Immer der Hersteller",
      "richtig": false
     }
    ]
   }
  },
  {
   "abschnitt": "Teil 2 – Weiterdenken",
   "text": "In den AGB des Shops steht: „Jede Gewährleistung ist ausgeschlossen.“ Gilt das für Max?",
   "optionen": [
    {
     "text": "Nein. Gegenüber Verbrauchern kann man die Gewährleistung vorher nicht ausschließen.",
     "richtig": true,
     "feedback": "Richtig. Die Rechte nach dem VGG kann man nicht zum Nachteil von Verbrauchern ausschließen, außer man vereinbart das erst nach der Meldung des Mangels (§ 3 VGG)."
    },
    {
     "text": "Ja. Max hat die AGB beim Bestellen akzeptiert.",
     "richtig": false,
     "feedback": "Nein. Zwingendes Verbraucherrecht kann man auch in AGB nicht wegschreiben."
    },
    {
     "text": "Ja, wenn der Satz fett gedruckt ist.",
     "richtig": false,
     "feedback": "Nein. Auch fett gedruckt bleibt der Ausschluss gegenüber Verbrauchern unwirksam."
    }
   ],
   "theorie": "AGB sind vorformulierte Vertragsbedingungen. Ungewöhnliche, nachteilige Klauseln, mit denen man nicht rechnen musste, werden nicht Vertragsinhalt (§ 864a ABGB). Gröblich benachteiligende Klauseln sind nichtig (§ 879 Abs 3 ABGB). Die Gewährleistungsrechte von Verbrauchern sind zwingend: Sie können nicht zum Nachteil des Verbrauchers ausgeschlossen oder eingeschränkt werden, es sei denn, die Vereinbarung wird erst geschlossen, nachdem der Verbraucher den Unternehmer vom Mangel verständigt hat (§ 3 VGG).",
   "wiederholung": {
    "frage": "Kann ein Shop in den AGB die Gewährleistung für Verbraucher ausschließen?",
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
  }
 ],
 "ergebnis": {
  "art": "Austausch oder Reparatur nach dem VGG",
  "inhalt": "Der Shop muss Max den Lautsprecher reparieren oder austauschen. Der Ausschluss in den AGB gilt nicht.",
  "begruendung": [
   "Der Kaufvertrag ist mit dem Klick und der Annahme zustande gekommen (§ 861 ABGB).",
   "Der Mangel zeigt sich im ersten Jahr, also wird vermutet, dass er schon bei der Übergabe da war (§ 11 VGG).",
   "Gewährleistung leistet der Verkäufer, und gegenüber Verbrauchern ist sie zwingend (§ 3, § 12 VGG)."
  ]
 },
 "reflexion": {
  "optional": true,
  "titel": "Reflexion (optional, zum Diskutieren)",
  "fragen": [
   "Rücktritt und Gewährleistung: Erkläre einer Freundin in zwei Sätzen den Unterschied.",
   "Warum schützt das Gesetz Verbraucher stärker als Unternehmen?"
  ]
 },
 "belohnung": {
  "xp": 50,
  "abzeichen": {
   "name": "Konsumenten-Profi",
   "emoji": "🛒"
  }
 },
 "abschluss": "Super! 14 Tage Rücktritt ohne Grund, zwei Jahre Gewährleistung bei Mängeln, und der Verkäufer kann das nicht in den AGB wegschreiben."
};
window.FAELLE = window.FAELLE || [];
window.FAELLE.push(window.FALL8);
