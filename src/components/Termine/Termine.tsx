import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChildren, faClock, faExclamationCircle, faLocationPin, faPersonPregnant, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import styles from "./termine.module.css"
import BookBtn from '../BookBtn/BookBtn'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import centerLogo from "../../../public/images/center-logo.png"
import SocialUl from '../SocialUl/SocialUl'

const Termine = () => {

    const t = useTranslations("HomePage.OnlineTermine")

  return (
    <section  className={styles.termine}>
        <MainHeading>
            {
                t("Heading")
            }
        </MainHeading>
        <div className="container"> 
            <h3>
                Dr.in Fairoz Mohammed
            </h3>
            <div className={styles.emergency}>
                <div className={styles.emergencyHeading}>
                    <h2>
                        Dringender Termin
                    </h2>
                    <span>
                        gilt für Montag–Freitag
                    </span>
                </div>
                <p>
                    Sie können einen schnellen Termin (Mo–Fr) nach Umorganisation erhalten, <span>wenn eine der folgenden Bedingungen zutrifft</span>:
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPersonPregnant} />
                        <span>
                            Schwangerschaft
                        </span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChildren} />
                        <span>
                            Kind mit auffälligen Schilddrüsenwerten
                        </span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquarePollVertical} />
                        <span>
                            TSH &lt; 0,1 mIU/L oder TSH &gt; 10 mIU/L
                        </span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <span>
                            Akute Halsschmerzen oder Schwellung am Hals und auffällige Schilddrüsenwerte
                        </span>
                    </li>
                </ul>
                <p>
                    <span>
                        Bitte bringen Sie Ihre aktuellen Laborbefunde mit
                    </span>
                </p>
                <p>
                    Hinweis: Dieses Angebot gilt an <span>Werktagen (Mo–Fr)</span>
                </p>
                <p>
                    Bitte vereinbaren Sie den Termin über <span>WhatsApp</span>, <span>E-Mail</span> oder <span>SMS</span> und schildern Sie Ihren Fall kurz
                </p>
                <div>
                    <SocialUl />
                </div>
            </div>
            <div className={styles.appts}>
                <div className={styles.apptOne}>
                    <div className={styles.img}>
                        <Image src={centerLogo} alt='Gruppenpraxis Medizin Mariahilf logo'></Image>
                    </div>
                    <h4>
                        Gruppenpraxis Medizin Mariahilf
                    </h4>
                    <p>
                        <FontAwesomeIcon icon={faClock} />
                        <span>
                        {t("Appts.0.day")} : 13:00-19:00 {t("Appts.0.Uhr")}
                        </span>
                    </p>
                    <h5>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <span>
                            {
                                t("Appts.0.address")
                            }
                        </span>
                    </h5>
                    <div className={styles.btns}>
                        <BookBtn />
                    </div>
                    <div className={styles.location}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4954545057676!2d16.346496200000004!3d48.197072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078b9f7daadd%3A0xf4cc95071955a277!2sMedizin%20Mariahilf!5e0!3m2!1sen!2seg!4v1758353796303!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* <div className={styles.apptTwo}>
                    <Image src={centerLogo} alt='Gruppenpraxis Medizin Mariahilf logo'></Image>
                </div> */}
            </div>
            {/* <div className={styles.btns + " " + "stagger-text"}>
                <BookBtn lo={lo} />
            </div> */}
        </div>
    </section>
  )
}

export default Termine