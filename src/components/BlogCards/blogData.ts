import { StaticImageData } from "next/image";


import hashimotoImg from "../../../public/images/hashimoto.png"
import morbusImg from "../../../public/images/morbus.png"
import pregnancyImg from "../../../public/images/thyroid-pregnancy.png"
import thyroidNodulesImg from "../../../public/images/thyroid-nodules.webp"
import schilddrüsenFeinnadelpunktion from "../../../public/images/slide-thyroid.jpg"
import schilddrüsenerkrankungenBeiKindern from "../../../public/images/children-blog.webp"

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
    faqsEn: Faq[],
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
        brief: "In meiner Ordination biete ich die Schilddrüsen-Feinnadelpunktion (FNP) als schonende und zuverlässige Methode an, um unklare Schilddrüsenknoten abzuklären.",
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
        faqsEn: [
            {
                question: "Thyroid hormones control growth, brain development, and metabolism",
                answer: `•	Too much (hyperthyroidism): restlessness, weight loss, rapid heartbeat, poor concentration.
                        •	Too little (hypothyroidism): tiredness, weight gain, slow growth, learning difficulties.`
            },
            {
                question: "Fast treatment is essential",
                answer: `We see children (5+ years) with proven thyroid dysfunction, thyroid nodules, family history of thyroid disease/cancer, and for long-term follow-up after thyroid surgery`
            },
        ],
        img: schilddrüsenerkrankungenBeiKindern
    },
]

export default blogPosts;