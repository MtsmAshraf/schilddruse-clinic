import { StaticImageData } from "next/image";


import hashimotoImg from "../../../public/images/hashimoto.png"
import morbusImg from "../../../public/images/morbus.png"
import pregnancyImg from "../../../public/images/thyroid-pregnancy.png"
import thyroidNodulesImg from "../../../public/images/thyroid-nodules.jpeg"

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
    body: string;
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
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
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
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
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
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        faqs: [
            {
                question: "Was ist Hashimoto?",
                answer: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion."
            }
        ],
        img: pregnancyImg
    },
    {
        id: "4",
        title: "Schilddrüsen-knoten",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        faqs: [
            {
                question: "Was ist Hashimoto?",
                answer: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion."
            }
        ],
        img: thyroidNodulesImg
    },
]

export default blogPosts;