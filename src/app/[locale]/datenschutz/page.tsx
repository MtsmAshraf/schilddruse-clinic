import React from 'react'
import styles from "./datenschutz.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import Termine from '@/components/Termine/Termine'
import Telemedizin from '@/components/Telemedizin/Telemedizin'

const Datenschutz = () => {
  return (
    <>
        <section className={styles.datenschutz}>
            <MainHeading>
                Datenschutz
            </MainHeading>
            <div className="container">
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

            </div>

        </section>
        <Termine />
        <Telemedizin />
    </>
  )
}

export default Datenschutz