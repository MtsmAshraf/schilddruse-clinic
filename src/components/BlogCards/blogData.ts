import { StaticImageData } from "next/image";


import hashimotoImg from "../../../public/images/hashimoto.png"
import morbusImg from "../../../public/images/morbus.png"
import pregnancyImg from "../../../public/images/thyroid-pregnancy.png"
import thyroidNodulesImg from "../../../public/images/thyroid-nodules.webp"
import schilddrüsenFeinnadelpunktion from "../../../public/images/slide-thyroid.jpg"
import schilddrüsenerkrankungenBeiKindern from "../../../public/images/children-blog.jpeg"

export type Faq = {
    question: string;
    answer: string;
}

export type BlogPost = {
    id: string;
    title: string;
    brief: string;
    date: string;
    author: string
    body?: string;
    faqs: Faq[],
    img: StaticImageData
}


const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Hashimoto",
        brief: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        faqs: [
            {
                question: "Was ist Hashimoto?",
                answer: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion."
            },
            {
                question: "Welche typischen Symptome gibt es?",
                answer: `• Müdigkeit, Energiemangel

                    • Gewichtszunahme oder Schwierigkeiten beim Abnehmen

                    • Kälteempfindlichkeit

                    • Haarausfall, trockene Haut, brüchige Nägel

                    • Stimmungsschwankungen, Depression, Angst

                    • Konzentrationsprobleme („Brain Fog“)

                    • Verstopfung, verlangsamte Verdauung

                    `
            },
            {
                question: "Welche Auswirkungen hat Hashimoto auf den Körper und das Leben?",
                answer: "Es verlangsamt den Stoffwechsel, kann Cholesterin erhöhen, Herz und Muskeln belasten, Verdauung verlangsamen, den Hormonhaushalt stören (Zyklus, Fruchtbarkeit) und die Stimmung deutlich beeinflussen."
            },
            {
                question: "Wie wird Hashimoto diagnostiziert?",
                answer: "Durch Blutuntersuchungen (TSH, freies T4, Antikörper wie TPO, TG). Manchmal zusätzlich mit Ultraschall der Schilddrüse."
            },
            {
                question: "Kann man Hashimoto natürlich behandeln, bevor Medikamente nötig sind?",
                answer: `Ja, Lebensstil spielt eine wichtige Rolle:

                    • Entzündungsarme Ernährung (viel Gemüse, Obst, frische Lebensmittel)

                    • Weniger Zucker und Fertigprodukte

                    • Nährstoffe ausgleichen (Vitamin D, Selen, Zink, B12)

                    • Stressabbau (Yoga, Meditation, Achtsamkeit)

                    • Regelmäßige Bewegung, guter Schlaf

                    • Glutenreduktion, falls sensibel

                `
            },
            {
                question: "Wann sind Medikamente notwendig?",
                answer: "Wenn Blutwerte eine deutliche Unterfunktion zeigen oder Beschwerden das Leben stark einschränken. Standard ist Schilddrüsenhormon-Ersatz."
            },
            {
                question: "Kann man mit Hashimoto ein normales Leben führen?",
                answer: "Ja – mit gesunder Lebensweise, ärztlicher Kontrolle und ggf. Therapie können die meisten Menschen ein normales, aktives Leben führen."
            },
            {
                question: "Ich habe in der Familie Hashimoto. Bedeutet das, dass ich oder meine Kinder es auch bekommen könnten? Wie kann man dieses Risiko beeinflussen?",
                answer: `• Ja, eine familiäre Vorgeschichte (Eltern, Geschwister) mit Hashimoto oder einer anderen Autoimmun-Schilddrüsenerkrankung erhöht das Risiko. In einer Studie hatten Angehörige ersten Grades ein deutlich erhöhtes Risiko, Ant	ikörper gegen die Schilddrüse oder eine Hypothyreose zu entwickeln.  

                    • Aber: Risiko heißt nicht Gewissheit – viele Menschen mit familiärer Belastung bekommen Hashimoto nicht.

                    • Möglichkeiten, das Risiko zu senken oder früh zu erkennen:

                    1. Regelmäßige Kontrollen bei Auftreten von Symptomen (z. B. Bluttests: TSH, freies T4, Antikörper).

                    2. Gesunde Lebensweise: ausgewogene Ernährung, Vermeidung von übermäßigem Jod, Stressmanagement, regelmäßige Bewegung.

                    3. Ausgleich von Nährstoffmängeln (z. B. Vitamin D, Selen) falls vorhanden.

                    4. Vermeidung von Umweltfaktoren, die Autoimmunreaktionen begünstigen (Rauchen, Schadstoffbelastung etc.).

                `
            },
            {
                question: "Kommt Hashimoto oft zusammen mit anderen Autoimmunerkrankungen vor?",
                answer: `• Ja. Personen mit Hashimoto haben ein erhöhtes Risiko, zusätzlich andere Autoimmunerkrankungen zu entwickeln. Zu den häufigeren gehören Zöliakie, rheumatoide Arthritis, Typ-1-Diabetes, Vitiligo oder perniziöse Anämie.  

                    • Das bedeutet nicht, dass jeder Hashimoto-Patient automatisch eine weitere Autoimmunerkrankung bekommt, aber die Wahrscheinlichkeit ist deutlich höher.

                    • Wenn weitere Symptome auftreten, die nicht typisch für Hashimoto sind (z. B. Verdauungsprobleme, Hautveränderungen etc.), sollte man mit dem Arzt besprechen, ob ein Screening sinnvoll ist.

                `
            },
        ],
        img: hashimotoImg
    },
    {
        id: "2",
        title: "Morbus Basedow",
        brief: "Morbus Basedow ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse überstimuliert. Dadurch entsteht eine Überfunktion der Schilddrüse (Hyperthyreose).",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        faqs: [
            {
                question: "Was ist Morbus Basedow?",
                answer: "Morbus Basedow ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse überstimuliert. Dadurch entsteht eine Überfunktion der Schilddrüse (Hyperthyreose)."
            },
            {
                question: "Welche typischen Symptome gibt es?",
                answer: `• Gewichtsabnahme trotz normalem oder erhöhtem Appetit
                        • Herzrasen, Herzklopfen
                        • Schwitzen, Wärmeintoleranz
                        • Nervosität, Reizbarkeit, Angst
                        • Zittern der Hände (Tremor)
                        • Müdigkeit und Muskelschwäche
                        • Vergrößerte Schilddrüse (Struma)
                        • Augenveränderungen (Basedow-Ophthalmopathie): Hervortreten der Augen, Doppelbilder, Reizungen
                        `
            },
            {
                question: "Wie wird Morbus Basedow diagnostiziert?",
                answer: `• Blutuntersuchung: Niedriges TSH, erhöhtes freies T4/T3, Nachweis von Antikörpern (TRAK).
                        • Ultraschall der Schilddrüse.
                        • In manchen Fällen Szintigrafie.
                        `
            },
            {
                question: "Ist Morbus Basedow vererbbar?",
                answer: `Eine familiäre Vorbelastung erhöht das Risiko, aber nicht jeder entwickelt die Krankheit. Auch Umwelt- und Lebensstilfaktoren spielen eine Rolle.`
            },
            {
                question: "Wie wird Morbus Basedow behandelt?",
                answer: `• Medikamente: Thyreostatika (z. B. Thiamazol, Carbimazol, Propylthiouracil).
                        • Radiojodtherapie: Zerstört gezielt Schilddrüsengewebe.
                        • Operation: In speziellen Fällen.
                        • Augensymptome benötigen oft eine zusätzliche Therapie (Augentropfen, Kortison, ggf. Operation).
                        `
            },
            {
                question: "Können Lebensstiländerungen helfen?",
                answer: `Ja – sie ersetzen zwar keine Therapie, können aber Beschwerden lindern:
                        • Kein Rauchen (verschlechtert die Augenbeteiligung).
                        • Stress reduzieren.
                        • Ausgewogene Ernährung mit Calcium und Vitamin D für die Knochengesundheit.
                        • Regelmäßige ärztliche Kontrollen.
                        `
            },
            {
                question: "Wie ist die Langzeitprognose?",
                answer: `Mit konsequenter Behandlung und Kontrolle können die meisten Patienten ein normales Leben führen. Manche entwickeln im Verlauf eine Schilddrüsenunterfunktion und benötigen dann dauerhaft Schilddrüsenhormone.`
            }
        ],
        img: morbusImg
    },
    {   
        id: "3",
        title: "Thyroid and pregnancy",
        brief: "Die Schilddrüse produziert Hormone (T4 und T3), die für die Entwicklung des Gehirns und des Nervensystems des Babys entscheidend sind – besonders im 1. Trimester, wenn das Kind noch keine eigenen Hormone bilden kann.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        faqs: [
            {
                question: "Warum ist die Schilddrüse in der Schwangerschaft so wichtig?",
                answer: `Die Schilddrüse produziert Hormone (T4 und T3), die für die Entwicklung des Gehirns und des Nervensystems des Babys entscheidend sind – besonders im 1. Trimester, wenn das Kind noch keine eigenen Hormone bilden kann.`
            },
            {
                question: "Soll ich meine Schilddrüse prüfen lassen, bevor ich schwanger werde?",
                answer: `Ja. Frauen mit Schilddrüsenerkrankungen oder Risikofaktoren (familiäre Belastung, Autoimmunerkrankungen, Unfruchtbarkeit, Fehlgeburten in der Vorgeschichte) sollten ihre Schilddrüsenfunktion vor der Schwangerschaft testen lassen.`
            },
            {
                question: "Wie verändert die Schwangerschaft die Schilddrüse?",
                answer: `Der Hormonbedarf steigt. Die Schilddrüse muss stärker arbeiten, und das Schwangerschaftshormon hCG kann die Schilddrüse zusätzlich anregen.`
            },
            {
                question: "Welche Schilddrüsenprobleme können in der Schwangerschaft auftreten?",
                answer: `• Hypothyreose (Unterfunktion): erhöhtes Risiko für Fehlgeburten, Präeklampsie, Anämie, niedriges Geburtsgewicht und Entwicklungsstörungen beim Kind.
                        • Hyperthyreose (Überfunktion): erhöhtes Risiko für Frühgeburten, Präeklampsie, niedriges Geburtsgewicht.
                        • Postpartale Thyreoiditis: vorübergehende Entzündung nach der Geburt mit Über- oder Unterfunktion.
                        `
            },
            {
                question: "Wie werden Schilddrüsenprobleme in der Schwangerschaft behandelt?",
                answer: `• Unterfunktion: Levothyroxin ist sicher und notwendig.
                        • Überfunktion: Thyreostatika werden vorsichtig eingesetzt (Propylthiouracil im 1. Trimester, später Thiamazol).
                        • Engmaschige Kontrollen mit Bluttests alle 4–6 Wochen sind wichtig.
                        `
            },
            {
                question: "Was passiert nach der Entbindung?",
                answer: `• Der Bedarf an Schilddrüsenhormon kann sich ändern.
                        • Postpartale Thyreoiditis kann Müdigkeit, Stimmungsschwankungen oder Herzklopfen verursachen – oft wird das mit „normalen“ Nachgeburtsbeschwerden verwechselt.
                        • Frauen mit Schilddrüsenerkrankungen sollten 6–12 Wochen nach der Geburt ihre Werte kontrollieren lassen.
                        `
            },
            {
                question: "Kann ich mit einer Schilddrüsenerkrankung stillen?",
                answer: `Ja. Levothyroxin ist unbedenklich. Auch Thyreostatika können in niedriger Dosis unter ärztlicher Aufsicht eingesetzt werden.`
            },
        ],
        img: pregnancyImg
    },
    {
        id: "4",
        title: "Schilddrüsen-knoten",
        brief: "Schilddrüsenknoten sind Gewebeveränderungen in der Schilddrüse. Sie sind sehr häufig und meist gutartig.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        faqs: [
            {
                question: "Was sind Schilddrüsenknoten?",
                answer: `Schilddrüsenknoten sind Gewebeveränderungen in der Schilddrüse. Sie sind sehr häufig und meist gutartig.`
            },
            {
                question: "Wie häufig kommen sie vor?",
                answer: `Etwa jeder dritte Erwachsene entwickelt im Laufe des Lebens Knoten in der Schilddrüse. Frauen sind häufiger betroffen als Männer.`
            },
            {
                question: "Welche Symptome können auftreten?",
                answer: `•	Oft gar keine Beschwerden
                        •	Druck- oder Kloßgefühl im Hals
                        •	Schluckbeschwerden oder Heiserkeit (bei größeren Knoten)
                        •	In seltenen Fällen Überfunktion (Nervosität, Herzrasen, Gewichtsabnahme)`
            },
            {
                question: "Wie werden Schilddrüsenknoten diagnostiziert?",
                answer: `•	Ultraschall der Schilddrüse
                        •	Blutuntersuchungen (TSH, T3, T4)
                        •	Szintigrafie (Unterscheidung kalte vs. heiße Knoten)
                        •	Feinnadelpunktion bei Verdacht auf Bösartigkeit`
            },
            {
                question: "Was bedeutet „heißer“ oder „kalter“ Knoten?",
                answer: `•	Heiße Knoten: produzieren zu viele Hormone → fast immer gutartig.
                    •	Kalte Knoten: keine Hormonproduktion → selten bösartig, manchmal weitere Abklärung nötig.`
            },
            {
                question: "Wie werden Knoten behandelt?",
                answer: `•	Kleine, unauffällige Knoten: regelmäßige Kontrolle.
                        •	Bei Überfunktion: Medikamente, Radiojod oder Operation.
                        •	Bei Verdacht auf Krebs: operative Entfernung.`
            },
            {
                question: "Wie ist die Prognose?",
                answer: `Die meisten Knoten sind harmlos. Nur etwa 5 % sind bösartig, und auch Schilddrüsenkrebs ist in vielen Fällen gut behandelbar.`
            }
        ],
        img: thyroidNodulesImg
    },
    {
        id: "5",
        title: "Schilddrüsen-Feinnadelpunktion (FNP / Fine Needle Aspiration – FNA)",
        brief: "n meiner Ordination biete ich die Schilddrüsen-Feinnadelpunktion (FNP) als schonende und zuverlässige Methode an, um unklare Schilddrüsenknoten abzuklären.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        faqs: [
            {
                question: "Was ist eine Schilddrüsen-Feinnadelpunktion?",
                answer: "Dabei handelt es sich um einen einfachen, minimal-invasiven Eingriff. Unter Ultraschallkontrolle entnehme ich mit einer sehr dünnen Nadel eine kleine Zellprobe aus einem Schilddrüsenknoten. Diese wird anschließend von einem spezialisierten Pathologen untersucht, um zu klären, ob der Knoten gutartig oder verdächtig ist."
            },
            {
                question: "Warum wird die Punktion empfohlen?",
                answer: `•	Um festzustellen, ob ein Schilddrüsenknoten harmlos oder potenziell bösartig ist.
                •	Um unnötige Operationen zu vermeiden, wenn der Knoten gutartig ist.
                •	Um die beste weitere Therapieentscheidung treffen zu können.
                `
            },
            {
                question: "Wie läuft die Untersuchung ab?",
                answer: `•	Die Punktion erfolgt stets unter Ultraschallkontrolle.
                        •	Nach Desinfektion wird mit einer sehr feinen Nadel der Knoten punktiert.
                        •	Zur Erhöhung der Genauigkeit werden meist mehrere Proben entnommen.
                        •	Der gesamte Eingriff dauert in der Regel 10–15 Minuten.`
            },
            {
                question: "Ist die Punktion schmerzhaft?",
                answer: `Die meisten Patient:innen empfinden den Einstich als kaum schmerzhaft – vergleichbar mit einer Blutabnahme.`
            },
            {
                question: "Muss ich mich vorbereiten?",
                answer: `•	Eine spezielle Vorbereitung ist nicht notwendig.
                        •	Bitte informieren Sie mich, wenn Sie blutverdünnende Medikamente (z. B. Aspirin, Marcoumar, Eliquis, Xarelto) einnehmen – diese müssen eventuell nach Rücksprache mit Ihrem Hausarzt angepasst werden.
                        •	Essen und Trinken vor der Untersuchung ist erlaubt.`
            },
            {
                question: "Welche Risiken gibt es?",
                answer: `Die Schilddrüsen-FNP gilt als sehr sicher. Gelegentlich können leichte Schmerzen, kleine Blutergüsse oder eine vorübergehende Schwellung auftreten. Schwere Komplikationen sind äußerst selten.`
            },
            {
                question: "Wie zuverlässig ist das Ergebnis?",
                answer: `•	In ca. 70–80 % der Fälle ergibt sich ein eindeutiges (gutartig oder bösartig) Ergebnis.
                    •	In 20–30 % kann das Ergebnis unklar sein – dann sind manchmal eine Wiederholung oder weitere Tests notwendig.
                    •	Insgesamt ist die FNP die verlässlichste Erstuntersuchung zur Abklärung von Schilddrüsenknoten.`
            },
            {
                question: "Wann liegt das Ergebnis vor?",
                answer: `Das pathologische Ergebnis ist meist innerhalb von 3–7 Werktagen verfügbar.`
            },
            {
                question: "Was passiert nach der Punktion?",
                answer: `•	Sie können direkt nach der Untersuchung nach Hause gehen.
                        •	Bitte meiden Sie körperliche Anstrengungen für 24 Stunden.
                        •	Sollten Sie eine ungewöhnliche Schwellung oder stärkere Schmerzen bemerken (sehr selten), kontaktieren Sie mich bitte umgehend.`
            },
            {
                question: "Wie geht es danach weiter?",
                answer: `•	Gutartiger Befund: Beobachtung und regelmäßige Ultraschallkontrollen.
                        •	Verdächtiger oder bösartiger Befund: Überweisung zur Operation.
                        •	Unklarer Befund: Gelegentlich Wiederholung /Kontrolle notwendig.`
            },
        ],
        img: schilddrüsenFeinnadelpunktion
    },
    {
        id: "6",
        title: "Schilddrüsenerkrankungen bei Kindern",
        brief: "Schilddrüsenhormone steuern Wachstum, Gehirnentwicklung und Stoffwechsel.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: `
            Schilddrüsenhormone steuern Wachstum, Gehirnentwicklung und Stoffwechsel.
                •	Zu viel (Hyperthyreose): Unruhe, Gewichtsverlust, Herzrasen, Konzentrationsprobleme.
                •	Zu wenig (Hypothyreose): Müdigkeit, Gewichtszunahme, Wachstumsstörung, Lernschwierigkeiten.
            👉 Eine rasche Behandlung ist entscheidend. Wir betreuen Kinder (ab 5 Jahren) mit nachgewiesener Schilddrüsenfunktionsstörung, Schilddrüsenknoten, familiärer Belastung oder zur Langzeitnachsorge nach Schilddrüsenoperation.
        `,
        faqs: [
            {
                question: "Schilddrüsenhormone steuern Wachstum, Gehirnentwicklung und Stoffwechsel",
                answer: `•	Zu viel (Hyperthyreose): Unruhe, Gewichtsverlust, Herzrasen, Konzentrationsprobleme.
                        •	Zu wenig (Hypothyreose): Müdigkeit, Gewichtszunahme, Wachstumsstörung,`
            },
            {
                question: "Eine rasche Behandlung ist entscheidend",
                answer: `Wir betreuen Kinder (ab 5 Jahren) mit nachgewiesener Schilddrüsenfunktionsstörung, Schilddrüsenknoten, familiärer Belastung oder zur Langzeitnachsorge nach Schilddrüsenoperation.`
            },
        ],
        img: schilddrüsenerkrankungenBeiKindern
    },
]

export default blogPosts;