import React from 'react'
import styles from "./datenschutz.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import Termine from '@/components/Termine/Termine'
import Telemedizin from '@/components/Telemedizin/Telemedizin'
import { getTranslations } from 'next-intl/server'

const Datenschutz = async ({
    params
} : {
    params: Promise<{ locale: string }>
}) => {
    const { locale } = await params
    const t = await getTranslations("Datenschutz")
  return (
    <>
        <section className={styles.datenschutz}>
            <MainHeading>
                {t("Heading")}
            </MainHeading>
            <div className="container">
                {
                    locale === "en" ? 
                    <>
                        <p>
                            Under the GDPR, I inform you that the following data are stored in my practice:
                        </p> <br />
                        <ul>
                            <li>
                                • Title, first name, last name
                            </li>
                            <li>
                                • Address
                            </li>
                            <li>
                                • Phone number, mobile number, email address
                            </li>
                            <li>
                                • Insurance and billing details (if applicable)
                            </li>
                            <li>
                                • Medical records and documents (if applicable)
                            </li>
                        </ul><br />

                        <p>
                            Why we store your data:
                        </p><br />
                        <ul>
                            <li>
                                • To organize appointments
                            </li>
                            <li>
                                • To provide and document medical treatment
                            </li>
                            <li>
                                • To handle billing
                            </li>
                            <li>
                                • To stay in touch and exchange information
                            </li>
                        </ul><br />

                        <p>
                            If you do not want your data to be stored, you can object at any time by email. Your data will then be deleted immediately, unless we are legally required to keep it.
                        </p><br />

                        <h4>Contact:</h4>
                        Dr. Fairoz Mohammed <br />
                        Specialist in Nuclear Medicine and Thyroid <br />
                        Mariahilfer Str. 95, 1060 Vienna <br />
                        www.schilddruesemohammed.at <br />
                        Email: <a href="mailto:office@schilddruesemohammed.at?subject=Mail-From-Schilddrüse-website" target='_blank'>
                                office@schilddruesemohammed.at
                            </a>
                        <br />

                    </> : 
                    <>
                        <p>
                            Mit Inkrafttreten der DSGVO informiere ich Sie, dass in meiner Ordination folgende Daten gespeichert werden:
                        </p> <br />
                        <ul>
                            <li>
                                • Titel, Vorname, Nachname
                            </li>
                            <li>
                                • Adresse
                            </li>
                            <li>
                                • Telefonnummer, Mobilnummer, E-Mail-Adresse
                            </li>
                            <li>
                                • ggf. Versicherungs- und Abrechnungsdaten
                            </li>
                            <li>
                                • ggf. medizinische Befunde und Unterlagen
                            </li>
                        </ul><br />

                        <p>
                            Zweck der Speicherung:
                        </p><br />
                        <ul>
                            <li>
                                • Terminorganisation
                            </li>
                            <li>
                                • Durchführung und Dokumentation der medizinischen Behandlung
                            </li>
                            <li>
                                • Abrechnung von Leistungen
                            </li>
                            <li>
                                • Informationsaustausch und Kontaktpflege
                            </li>
                        </ul><br />
                
                        <p>
                            Wenn Sie Einwände gegen die Speicherung Ihrer Daten haben, können Sie jederzeit per E-Mail widersprechen. Ihre Daten werden dann – soweit keine gesetzlichen Aufbewahrungspflichten bestehen – umgehend gelöscht.
                        </p><br />

                        <h4>Kontakt:</h4>
                        Dr.in med. univ. Fairoz Mohammed <br />
                        Fachärztin für Nuklearmedizin und Schilddrüse <br />
                        Mariahilfer Str. 95, 1060 Wien <br />
                        www.schilddruesemohammed.at <br />
                        E-Mail: <a href="mailto:office@schilddruesemohammed.at?subject=Mail-From-Schilddrüse-website" target='_blank'>
                                office@schilddruesemohammed.at
                            </a>
                        <br />

                    </>
                }
            </div>
        </section>
        <Termine />
        <Telemedizin />
    </>
  )
}

export default Datenschutz