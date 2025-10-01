import { StaticImageData } from "next/image";


import hashimotoImg from "../../../public/images/hashimoto.png"
import morbusImg from "../../../public/images/morbus.png"
import pregnancyImg from "../../../public/images/thyroid-pregnancy.png"
import thyroidNodulesImg from "../../../public/images/thyroid-nodules.webp"
import schilddrüsenFeinnadelpunktion from "../../../public/images/slide-thyroid.jpg"
import schilddrüsenerkrankungenBeiKindern from "../../../public/images/children-blog.webp"
import Schilddrüsenszintigraphie from "../../../public/images/card-szint.png"

export type Faq = {
    question: string;
    answer: string;
}

export type BlogPost = {
    id: string;
    title: string;
    titleEn: string;
    cardTitle?: boolean;
    brief: string;
    briefEn: string;
    date: string;
    author: string
    body?: string;
    bodyEn?: string;
    faqs: Faq[],
    faqsEn: Faq[],
    img: StaticImageData
}


const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Hashimoto",
        titleEn: "Hashimoto’s disease",
        brief: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion.",
        briefEn: "Hashimoto’s thyroiditis is an autoimmune condition where the immune system attacks the thyroid gland, often leading to hypothyroidism (underactive thyroid).",
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
        faqsEn: [
            {
                question: "What is Hashimoto’s disease?",
                answer: "Hashimoto’s thyroiditis is an autoimmune condition where the immune system attacks the thyroid gland, often leading to hypothyroidism (underactive thyroid)."
            },
            {
                question: "What are the common symptoms?",
                answer: `• Fatigue and low energy
                        • Weight gain or difficulty losing weight
                        • Feeling cold
                        • Hair loss, dry skin, brittle nails
                        • Mood changes (depression, anxiety, irritability)
                        • Brain fog or poor concentration
                        • Constipation and slow digestion
                    `
            },
            {
                question: "How does Hashimoto’s affect the body and life?",
                answer: "It can slow metabolism, increase cholesterol, affect the heart, muscles, digestion, reproductive system (menstrual cycle, fertility), and strongly influence mood and mental health."
            },
            {
                question: "How is it diagnosed?",
                answer: "Blood tests: TSH, free T4, and thyroid antibodies (TPO, TG). Sometimes ultrasound of the thyroid."
            },
            {
                question: "Can Hashimoto be managed naturally before starting therapy?",
                answer: `Yes – lifestyle can make a big difference:
• Anti-inflammatory diet (fruits, vegetables, whole foods)
• Reduce processed foods and sugar
• Correct nutrient deficiencies (Vitamin D, Selenium, Zinc, B12)
• Stress reduction (yoga, meditation, mindfulness)
• Regular exercise and good sleep
• Consider gluten-free if sensitive
                `
            },
            {
                question: "When is medication necessary?",
                answer: "If blood tests show significant hypothyroidism, or symptoms strongly affect daily life. The standard therapy is levothyroxine (T4 replacement)."
            },
            {
                question: "Will I live a normal life with Hashimoto?",
                answer: "Yes – with proper monitoring, healthy lifestyle, and treatment when necessary, most people live full, healthy lives."
            },
            {
                question: "I have a family history of Hashimoto’s. Does that mean I or my children will also develop Hashimoto? How can I manage this risk?",
                answer: `• Having family members (parents, siblings) with Hashimoto’s or other thyroid autoimmune disease does increase your risk. One study showed that first-degree relatives have a significantly higher likelihood of having thyroid antibodies or developing hypothyroidism due to Hashimoto’s.  
• But increased risk does not mean it’s certain. Many with family history never develop the disease.

• To manage or possibly reduce risk:
1. Get screened periodically if symptoms appear (blood tests for TSH, free T4, antibodies).

2. Maintain a healthy lifestyle: balanced diet, avoid excessive iodine, manage stress, regular physical activity.

3. Correction of nutritional deficiencies (e.g. vitamin D, selenium) if present.

4. Avoid environmental triggers (e.g. smoking, high radiation, toxins).
                `
            },
            {
                question: "Does having Hashimoto mean I’m likely to have other autoimmune diseases as well?",
                answer: `• Yes. People with Hashimoto’s are more likely than the general population to have or develop other autoimmune disorders. Examples include celiac disease, rheumatoid arthritis, type 1 diabetes, vitiligo and pernicious anemia.  

                • The risk is not overwhelming for everyone, but it is significantly higher.

                • If symptoms of another autoimmune disease appear (digestive issues, skin changes, etc.), discussing screening with your physician is reasonable.
                `
            },
        ],
        img: hashimotoImg
    },
    {
        id: "2",
        title: "Morbus Basedow",
        titleEn: "Graves’ disease (Morbus Basedow)",
        brief: "Morbus Basedow ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse überstimuliert. Dadurch entsteht eine Überfunktion der Schilddrüse (Hyperthyreose).",
        briefEn: "Graves’ disease is an autoimmune condition where the immune system overstimulates the thyroid gland, leading to hyperthyroidism (overactive thyroid).",
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
        faqsEn: [
            {
                question: " What is Graves’ disease (Morbus Basedow)?",
                answer: "Graves’ disease is an autoimmune condition where the immune system overstimulates the thyroid gland, leading to hyperthyroidism (overactive thyroid)."
            },
            {
                question: "What are the common symptoms?",
                answer: `• Weight loss despite normal or increased appetite
                        • Rapid heartbeat (palpitations)
                        • Sweating, heat intolerance
                        • Nervousness, anxiety, irritability
                        • Shaking hands (tremor)
                        • Fatigue and muscle weakness
                        • Enlarged thyroid (goiter)
                        • Eye changes (Graves’ orbitopathy): bulging eyes, eye irritation, double vision
                        `
            },
            {
                question: "How is Graves’ disease diagnosed?",
                answer: `• Blood tests: Low TSH, high free T4/T3, and thyroid antibodies (TRAb).
                        • Ultrasound of the thyroid.
                        • Sometimes a radioactive iodine uptake scan.
                        `
            },
            {
                question: " Is Graves’ disease hereditary?",
                answer: `A family history increases the risk, but not everyone develops it. It is also influenced by environment and lifestyle.`
            },
            {
                question: "How is it treated?",
                answer: `• Medication: Antithyroid drugs (e.g. methimazole, carbimazole, propylthiouracil).
                        • Radioactive iodine therapy (to shrink/ablate the thyroid).
                        • Surgery: In selected cases.
                        • Eye symptoms may require additional treatment (lubricating drops, steroids, or surgery).
                        `
            },
            {
                question: "Can lifestyle changes help?",
                answer: `Yes – while they don’t replace medical treatment, they may reduce symptoms:
                        • Avoid smoking (worsens eye disease).
                        • Reduce stress.
                        • Eat a balanced diet with enough calcium and vitamin D (protects bone health).
                        • Regular follow-up with your doctor.
                        `
            },
            {
                question: "What is the long-term outlook?",
                answer: `With proper treatment and monitoring, most patients live healthy lives. Some may later develop hypothyroidism and need lifelong thyroid hormone replacement.`
            }
        ],
        img: morbusImg
    },
    {   
        id: "3",
        title: "Schilddrüse & Schwangerschaft",
        titleEn: "Thyroid and pregnancy",
        brief: "Die Schilddrüse produziert Hormone (T4 und T3), die für die Entwicklung des Gehirns und des Nervensystems des Babys entscheidend sind – besonders im 1. Trimester, wenn das Kind noch keine eigenen Hormone bilden kann.",
        briefEn: "The thyroid produces hormones (T4 and T3) essential for the baby’s brain and nervous system development, especially in the first trimester when the baby cannot produce its own hormones.",
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
        faqsEn: [
            {
                question: "Why is the thyroid important during pregnancy?",
                answer: `The thyroid produces hormones (T4 and T3) essential for the baby’s brain and nervous system development, especially in the first trimester when the baby cannot produce its own hormones.`
            },
            {
                question: "Should I check my thyroid before getting pregnant?",
                answer: `Yes. Women with thyroid disease or risk factors (family history, autoimmune disease, infertility, previous miscarriage) should have their thyroid function tested before pregnancy.`
            },
            {
                question: "How does pregnancy affect the thyroid?",
                answer: `Pregnancy increases the need for thyroid hormones. The thyroid gland must work harder, and the hormone hCG can temporarily stimulate the thyroid.`
            },
            {
                question: "What thyroid problems can occur during pregnancy?",
                answer: `• Hypothyroidism (underactive thyroid): increases risks of miscarriage, preeclampsia, anemia, low birth weight, and developmental delays in the baby.
                        • Hyperthyroidism (overactive thyroid): increases risks of premature birth, preeclampsia, and low birth weight.
                        • Postpartum thyroiditis: temporary thyroid inflammation after delivery, may cause over- or underactivity.
                        `
            },
            {
                question: "How are thyroid problems treated during pregnancy?",
                answer: `• Hypothyroidism: Levothyroxine is safe and essential.
                        • Hyperthyroidism: Antithyroid drugs are used carefully (propylthiouracil in the 1st trimester, methimazole later).
                        • Close monitoring with blood tests every 4–6 weeks is important.
                        `
            },
            {
                question: "What about after delivery?",
                answer: `• Thyroid hormone needs may change.
                        • Postpartum thyroiditis can cause fatigue, mood swings, or palpitations – sometimes mistaken for normal postpartum changes.
                        • Women with thyroid disease should recheck thyroid function about 6–12 weeks after birth.
                        `
            },
            {
                question: "Can I breastfeed if I have thyroid disease?",
                answer: `Yes. Levothyroxine is safe. Antithyroid drugs can also be used in low doses under medical supervision.`
            },
        ],
        img: pregnancyImg
    },
    {
        id: "4",
        title: "Schilddrüsen-knoten",
        titleEn: "Thyroid Nodules",
        cardTitle: false,
        brief: "Schilddrüsenknoten sind Gewebeveränderungen in der Schilddrüse. Sie sind sehr häufig und meist gutartig.",
        briefEn: "Thyroid nodules are growths or lumps within the thyroid gland. They are common and usually benign.",
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
        faqsEn: [
            {
                question: "What are thyroid nodules?",
                answer: `Thyroid nodules are growths or lumps within the thyroid gland. They are common and usually benign.`
            },
            {
                question: "How common are they?",
                answer: `Up to one in three adults develop thyroid nodules during their lifetime. Women are more often affected than men.`
            },
            {
                question: "What symptoms may occur?",
                answer: `•	Often no symptoms at all
	•	A feeling of pressure or a lump in the throat
	•	Difficulty swallowing or hoarseness (with larger nodules)
	•	In rare cases, overactive thyroid symptoms (nervousness, rapid heartbeat, weight loss)`
            },
            {
                question: "How are thyroid nodules diagnosed?",
                answer: `•	Thyroid ultrasound
	•	Blood tests (TSH, T3, T4)
	•	Thyroid scintigraphy (to differentiate “cold” vs. “hot” nodules)
	•	Fine-needle aspiration biopsy if malignancy is suspected`
            },
            {
                question: "What does “hot” or “cold” nodule mean?",
                answer: `•	Hot nodules: produce excess hormones → almost always benign.
	•	Cold nodules: do not produce hormones → sometimes malignant, further testing may be needed.`
            },
            {
                question: "How are nodules treated?",
                answer: `•	Small, benign nodules: regular monitoring.
                        •	Overactive nodules: medication, radioactive iodine, or surgery.
                        •	Suspicious nodules or cancer: surgical removal.`
            },
            {
                question: "What is the prognosis?",
                answer: `Most nodules are harmless. Only about 5% are malignant, and even thyroid cancer is treatable in many cases.`
            }
        ],
        img: thyroidNodulesImg
    },
    {
        id: "5",
        title: "Schilddrüsen-Feinnadelpunktion (FNP / Fine Needle Aspiration – FNA)",
        titleEn: "Thyroid Fine Needle Biopsy (FNA / Feinnadelpunktion)",
        cardTitle: false,
        brief: "In meiner Ordination biete ich die Schilddrüsen-Feinnadelpunktion (FNP) als schonende und zuverlässige Methode an, um unklare Schilddrüsenknoten abzuklären.",
        briefEn: "At my clinic, I offer thyroid fine needle biopsy (FNA) as a gentle and reliable method to clarify suspicious thyroid nodules.",
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
        faqsEn: [
            {
                question: "What is a thyroid fine needle biopsy?",
                answer: "It is a simple and minimally invasive procedure in which I use a very thin needle to take a small sample of cells from a thyroid nodule under ultrasound guidance. The sample is then examined by a specialized pathologist to determine whether the nodule is benign or suspicious."
            },
            {
                question: "Why is the biopsy recommended?",
                answer: `•	To clarify whether a thyroid nodule is harmless or potentially malignant.
                    •	To avoid unnecessary surgery if the nodule is benign.
                    •	To guide the best possible treatment strategy.
                `
            },
            {
                question: "How is the procedure performed?",
                answer: `•	The procedure is done under ultrasound guidance.
                        •	After disinfection, I insert a very fine needle into the thyroid nodule.
                        •	Several samples may be taken for accuracy.
                        •	The entire procedure usually takes about 10–15 minutes.`
            },
            {
                question: "Is the biopsy painful?",
                answer: `Most patients find it only mildly uncomfortable, similar to a blood test.`
            },
            {
                question: "Do I need to prepare?",
                answer: `•	No special preparation is needed.
                        •	Please inform me if you are taking blood-thinning medication (e.g., Aspirin, Eliquis, Marcoumar, Xarelto), as this may need to be adjusted in consultation with your treating physician.
                        •	You can eat and drink as usual before the procedure.`
            },
            {
                question: "What are the risks?",
                answer: `The thyroid FNA is very safe. Rare side effects include mild pain, small bruising, or temporary swelling. Serious complications are extremely rare.`
            },
            {
                question: "How accurate are the results?",
                answer: `•	In about 70–80% of cases the results are clearly benign or malignant.
                        •	In about 20–30% the result may be indeterminate and require further tests.
                        •	Overall, FNA is the most reliable first diagnostic step for thyroid nodules.`
            },
            {
                question: "When will I get the results?",
                answer: `The pathology results are usually available within 3–7 working days.`
            },
            {
                question: "What happens afterwards?",
                answer: `•	You can go home immediately after the biopsy.
                        •	Please avoid heavy exercise for 24 hours.
                        •	If you notice unusual swelling or pain (very rare), contact me immediately.`
            },
            {
                question: "Next Steps",
                answer: `•	Benign result: observation with regular ultrasound follow-up.
                        •	Suspicious or malignant result: referral for surgery or other therapy.
                        •	Indeterminate result: sometimes a repeat biopsy or additional followup is required.`
            },
        ],
        img: schilddrüsenFeinnadelpunktion
    },
    {
        id: "6",
        title: "Schilddrüsen-erkrankungen bei Kindern",
        titleEn: "Thyroid disorders in children",
        cardTitle: false,
        brief: "Die Schilddrüse produziert Hormone, die für Wachstum, Gehirnreifung, Stoffwechsel und Herz-Kreislauf-Funktion entscheidend sind. Leitlinien betonen, dass eine unbehandelte Störung im Kindesalter die Entwicklung dauerhaft beeinträchtigen kann.",
        briefEn: "The thyroid produces hormones essential for growth, brain development, metabolism, and heart function. Even mild disturbances can have long-term effects on a child’s development if left untreated.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: ``,
        faqs: [
            {
                question: "Warum ist die Schilddrüse bei Kindern so wichtig?",
                answer: `Die Schilddrüse produziert Hormone, die für Wachstum, Gehirnreifung, Stoffwechsel und Herz-Kreislauf-Funktion entscheidend sind. Leitlinien betonen, dass eine unbehandelte Störung im Kindesalter die Entwicklung dauerhaft beeinträchtigen kann.`,
            },
            {
                question: "Ab welchem Alter können Schilddrüsenprobleme auftreten?",
                answer: `• Bereits bei Neugeborenen (angeborene Hypothyreose). Deshalb wird in Europa standardmäßig ein Neugeborenen-Screening (TSH im Fersenblut) durchgeführt.
                        • Im Kindes- und Jugendalter treten Erkrankungen häufiger bei Autoimmunerkrankungen (Hashimoto, Morbus Basedow) oder familiärer Belastung auf.
                        `,
            },
            {
                question: "Welche Symptome sind laut Leitlinien Warnsignale?",
                answer: `• Unterfunktion (Hypothyreose): Wachstumsverzögerung, verlangsamte geistige Entwicklung, Müdigkeit, Gewichtszunahme, Verstopfung, trockene Haut, Konzentrationsschwäche.
                        • Überfunktion (Hyperthyreose): Nervosität, Schlaflosigkeit, Zittern, Herzrasen, ungewollter Gewichtsverlust und Schwitzen.
                        • Knoten/Vergrößerung: sichtbare Schwellung am Hals, Schluckbeschwerden oder Druckgefühl.
                        `,
            },
            {
                question: "Wann ist eine Therapie notwendig?",
                answer: `Die Therapieentscheidung richtet sich nach den Leitlinien:
                        • Angeborene Hypothyreose: sofortige Therapie mit L-Thyroxin (innerhalb der ersten 2 Wochen nach Geburt).
                        • Autoimmunthyreopathie (Hashimoto): Therapie bei nachgewiesener Hypothyreose. Bei normaler Funktion oft zunächst nur Kontrollen.
                        • Morbus Basedow: Therapie mit Thiamazol, ggf. Radiojod oder Operation im Jugendalter bei Therapieversagen.
                        • Knoten: Abklärung per Ultraschall, ggf. Feinnadelpunktion bei suspektem Befund.
                        `,
            },
            {
                question: "Welche Untersuchungen sind empfohlen?",
                answer: `• Labor: TSH, fT4, ggf. fT3, Antikörper (TPO-AK, Tg-AK, TRAK).
                        • Ultraschall: zur Beurteilung von Größe, Struktur und Knoten.
                        • Szintigraphie: nur bei unklarer Funktion oder Knoten mit atypischem Befund.
                        • Feinnadelpunktion: bei suspekten Knoten nach europäischem Leitlinien-Algorithmus.
                        `,
            },
            {
                question: "Ist die Erkrankung heilbar oder chronisch?",
                answer: `• Angeborene Hypothyreose: meist lebenslange Therapie erforderlich.
                        • Hashimoto-Thyreoiditis: chronisch, Behandlung nach Funktionslage.
                        • Morbus Basedow: kann spontan remittieren, aber Rezidivrate hoch, daher längerfristige Kontrollen nötig.
                        • Knoten: oft gutartig, aber bei Kindern ist die Abklärung besonders wichtig, da das Risiko für Malignität höher ist als bei Erwachsenen.
                        `,
            },
            {
                question: "Hat die Schilddrüse Einfluss auf die schulische Leistung?",
                answer: `Ja. Studien zeigen, dass unbehandelte Hypo- oder Hyperthyreose die Konzentration, Gedächtnisleistung und das Verhalten deutlich beeinträchtigen können. Leitlinien empfehlen daher eine frühzeitige Abklärung bei schulischen Leistungseinbrüchen in Verbindung mit körperlichen Symptomen`,
            },
            {
                question: "Behandeln Sie auch Kinder in Ihrer Ordination?",
                answer: `Ja, entsprechend den europäischen Leitlinien betreuen wir Kinder ab 5 Jahren mit:
                        • Schilddrüsenfunktionsstörungen
                        • Schilddrüsenknoten
                        • Familiärer Vorbelastung
                        • Langzeitbetreuung nach Operation oder Radiojodtherapie
                        `,
            },
        ],
        faqsEn: [
            {
                question: "Why is the thyroid important in children?",
                answer: `The thyroid produces hormones essential for growth, brain development, metabolism, and heart function. Even mild disturbances can have long-term effects on a child’s development if left untreated.`
            },
            {
                question: "At what age can thyroid problems occur?",
                answer: `• Newborns: Congenital hypothyroidism can be present at birth. In Europe, every newborn undergoes a newborn screening test (heel prick test for TSH) to detect this early.
                        • Children & Adolescents: Thyroid diseases can appear later, often due to autoimmune conditions (Hashimoto’s thyroiditis, Graves’ disease) or family history.
                        `
            },
            {
                question: "What symptoms should raise concern?",
                answer: `• Hypothyroidism (underactive thyroid): growth delay, slowed mental development, tiredness, weight gain, constipation, dry skin, poor concentration.
                        • Hyperthyroidism (overactive thyroid): nervousness, restlessness, sleep problems, weight loss, rapid heartbeat und sweating .
                        • Nodules/goiter: visible neck swelling, swallowing problems, or a feeling of pressure.
                        `
            },
            {
                question: "When is treatment necessary?",
                answer: `European guidelines recommend treatment based on the specific condition:
                        • Congenital hypothyroidism: immediate L-thyroxine treatment (within the first 2 weeks of life).
                        • Hashimoto’s thyroiditis: treatment if hypothyroidism develops; otherwise, regular monitoring.
                        • Graves’ disease: first-line treatment with antithyroid drugs (e.g., methimazole); in resistant cases, surgery or radioiodine therapy may be considered in older children/adolescents.
                        • Nodules: ultrasound evaluation and, if suspicious, fine-needle aspiration biopsy.
                        `
            },
            {
                question: "How are thyroid problems diagnosed in children?",
                answer: `• Blood tests: TSH, free T4, sometimes free T3, and thyroid antibodies (TPO-Ab, Tg-Ab, TRAb).
                        • Ultrasound: to assess size, structure, and nodules.
                        • Scintigraphy: used selectively in unclear cases or to evaluate nodules.
                        • Fine-needle aspiration biopsy: when nodules show suspicious ultrasound features.
                        `
            },
            {
                question: "Are thyroid disorders curable or lifelong?",
                answer: `• Congenital hypothyroidism: usually lifelong therapy.
                        • Hashimoto’s thyroiditis: chronic, often requiring long-term treatment if hypothyroidism occurs.
                        • Graves’ disease: may go into remission, but relapses are common, requiring long-term follow-up.
                        • Nodules: usually benign in children but require careful evaluation, as the risk of malignancy is higher than in adults.
                        `
            },
            {
                question: "Can thyroid problems affect school performance?",
                answer: `Yes. Both hypo- and hyperthyroidism can significantly affect concentration, memory, and behavior. Guidelines recommend thyroid testing when unexplained school difficulties occur alongside physical symptoms`
            },
            {
                question: "Do you treat children in your practice?",
                answer: `Yes. In line with European guidelines, we provide care for children from the age of 5 years with:
                        • Thyroid dysfunction
                        • Thyroid nodules or enlargement
                        • Family history of thyroid disease or cancer
                        • Long-term follow-up after thyroid surgery or radioiodine therapy
                        `
            },
        ],
        img: schilddrüsenerkrankungenBeiKindern
    },
    {
        id: "7",
        title: "Schilddrüsen-szintigraphie",
        titleEn: "Thyroid Scintigraphy",
        cardTitle: false,
        brief: "Die Schilddrüsenszintigraphie ist eine sichere nuklearmedizinische Untersuchung, mit der die Funktion der Schilddrüse sichtbar gemacht wird",
        briefEn: "A thyroid scintigraphy is a safe nuclear medicine test that shows how your thyroid gland works",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: ``,
        faqs: [
            {
                question: "Was ist eine Schilddrüsenszintigraphie?",
                answer: `Die Schilddrüsenszintigraphie ist eine sichere nuklearmedizinische Untersuchung, mit der die Funktion der Schilddrüse sichtbar gemacht wird. Dabei wird eine sehr kleine Menge einer schwach radioaktiven Substanz (meist Technetium-99m) in eine Vene gespritzt. Eine spezielle Kamera (Gammakamera) nimmt anschließend Bilder auf und zeigt, wie die Schilddrüse den Stoff aufnimmt.

                        Diese Untersuchung liefert Informationen, die man mit Bluttests oder Ultraschall allein nicht bekommt:
                        • Sie zeigt, wie aktiv verschiedene Bereiche der Schilddrüse sind.
                        • Sie hilft festzustellen, ob ein Knoten zu viel Hormon produziert („heißer Knoten“) oder kaum aktiv ist („kalter Knoten“).
                        • Sie unterstützt die Entscheidung für die richtige Therapie (z. B. Medikamente, Operation oder Radiojodtherapie).
                        `
            },
            {
                question: "Ist die Untersuchung gefährlich?",
                answer: `Nein. Die Strahlenbelastung ist sehr gering – in etwa vergleichbar mit oder sogar niedriger als bei einer normalen Röntgenaufnahme. Nach europäischen Richtlinien gilt die Untersuchung als sicher für Erwachsene und auch für Kinder, wenn sie medizinisch notwendig ist.`
            },
            {
                question: "Warum darf die Untersuchung nicht in der Schwangerschaft durchgeführt werden?",
                answer: `Während der Schwangerschaft wird jede unnötige Strahlenbelastung für das ungeborene Kind vermieden. Deshalb ist die Schilddrüsenszintigraphie in der Schwangerschaft nicht erlaubt. Bitte informieren Sie uns vor der Untersuchung, wenn Sie schwanger sind oder es sein könnten.`
            },
            {
                question: "Können Kinder eine Schilddrüsenszintigraphie machen?",
                answer: `Ja. Wenn es medizinisch erforderlich ist, kann die Untersuchung auch bei Kindern durchgeführt werden. Die verabreichte Menge wird dabei sehr genau an das Körpergewicht des Kindes angepasst.`
            },
            {
                question: "Kann ich nach der Untersuchung arbeiten gehen?",
                answer: `Ja. Nach der Untersuchung können Sie Ihren Alltag und Ihre Arbeit normal fortsetzen. Die Substanz wird innerhalb weniger Stunden über den Urin aus dem Körper ausgeschieden.`
            },
            {
                question: "Was bedeutet „heißer“ oder „kalter“ Knoten?",
                answer: `• Ein heißer Knoten nimmt mehr Substanz auf als das übrige Schilddrüsengewebe. Er produziert meist zu viele Schilddrüsenhormone und ist fast immer gutartig.
                        • Ein kalter Knoten nimmt wenig oder gar keine Substanz auf. Die meisten kalten Knoten sind ebenfalls gutartig, in seltenen Fällen kann aber eine weitere Abklärung (z. B. Feinnadelpunktion) notwendig sein.
                        `
            },
        ],
        faqsEn: [
            {
                question: "What is a thyroid scintigraphy?",
                answer: `A thyroid scintigraphy is a safe nuclear medicine test that shows how your thyroid gland works. A very small amount of a weak radioactive tracer (usually Technetium-99m) is injected into a vein. A special camera (gamma camera) then takes pictures of how the tracer is taken up by the thyroid.

                        This examination provides information that blood tests and ultrasound alone cannot give:
                        • It shows how active different parts of the thyroid are.
                        • It helps to find out if a nodule is producing too much thyroid hormone (“hot nodule”) or not active (“cold nodule”).
                        • It helps in planning treatment options such as medication, surgery, or radioiodine therapy.
                        `
            },
            {
                question: "Is it dangerous?",
                answer: `No – the radiation dose is very low, similar to or even less than a normal X-ray examination. According to European guidelines, the test is considered safe for adults and children when medically necessary.`
            },
            {
                question: "Why is it not done in pregnancy?",
                answer: `During pregnancy, any unnecessary radiation exposure to the unborn child must be avoided. That is why thyroid scintigraphy is contraindicated in pregnancy. If you are pregnant or think you might be, please inform your doctor before the examination.`
            },
            {
                question: "Can children undergo thyroid scintigraphy?",
                answer: `Yes. Children can have this test if it is medically needed. The tracer dose is carefully adjusted to the child’s body weight.`
            },
            {
                question: "Can I go to work afterwards?",
                answer: `Yes. After the examination you can return to your normal daily activities, including work. The tracer leaves the body naturally through the urine within a few hours.`
            },
            {
                question: "What does “hot” and “cold” nodule mean?",
                answer: `• A hot nodule takes up more tracer than the surrounding thyroid tissue. It usually produces excess thyroid hormone and is almost always benign.
                        • A cold nodule takes up little or no tracer. Most cold nodules are also benign, but a small percentage may need further clarification (for example, by fine needle biopsy).
                        `
            },
        ],
        img: Schilddrüsenszintigraphie
    },
]

export default blogPosts;