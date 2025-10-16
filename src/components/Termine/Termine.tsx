"use client"
import React, { useState } from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronCircleDown, faChevronUp, faChildren, faClock, faExclamationCircle, faLocationPin, faPersonPregnant, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import styles from "./termine.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import centerLogo from "../../../public/images/center-logo.png"
import SocialUl from '../SocialUl/SocialUl'
import Link from 'next/link'

const Termine = () => {

    const t = useTranslations("HomePage.OnlineTermine")
    const [emergencyContentShown, setEmergencyContentShown] = useState(false)
  return (
    <section  className={styles.termine}>
        <MainHeading>
            {
                t("Heading")
            }
        </MainHeading>
        <div className="container"> 
            <h3>
                {
                    t("Emergency.DrName")
                }
            </h3>
            <p>
                {
                    t("Emergency.P1")
                }
            </p>
            <div className={styles.emergency}>
                <button onClick={() => {setEmergencyContentShown(!emergencyContentShown)}} className={styles.emergencyBtn}>
                    <h2>
                        {
                            t("Emergency.Btn")
                        }
                    </h2>
                    <span>
                        {
                            t("Emergency.BtnSpan")
                        }
                    </span>
                    <FontAwesomeIcon icon={faChevronCircleDown} style={{ transform:  emergencyContentShown ? `translate(50%,-50%) rotateZ(180deg)` : `translate(50%,-50%) rotate(0)` }}/>
                </button>
                <div className={emergencyContentShown ? styles.emergencyContent + " " + styles.shown : styles.emergencyContent}>    
                    <button onClick={() => {setEmergencyContentShown(false)}}  className={styles.closeContent}>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <p>
                        {t("Emergency.P2")}, <span>{t("Emergency.P2Span")}</span>:
                    </p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faPersonPregnant} />
                            <span>
                                {t("Emergency.Li.0")}
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChildren} />
                            <span>
                                {t("Emergency.Li.1")}
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquarePollVertical} />
                            <span>
                                {t("Emergency.Li.2")}
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            <span>
                                {t("Emergency.Li.3")}
                            </span>
                        </li>
                    </ul>
                    <p>
                        <span>
                            {t("Emergency.P3Span")}
                        </span>
                    </p>
                    <p>
                        {t("Emergency.P4")} <span>{t("Emergency.P4Span")}</span>
                    </p>
                    <p>
                        {t("Emergency.P5")} <span>WhatsApp</span>, <span>E-Mail</span> {t("Emergency.P52")} <span>SMS</span> {t("Emergency.P53")}
                    </p>
                    <div>
                        <SocialUl />
                    </div>
                </div>
            </div>
            <div className={styles.appts}>
                <div className={styles.apptOne}>
                    <div className={styles.img}>
                        <a href="https://www.medizinmariahilf.at/wahlordination/" target='_blank'>
                            <Image src={centerLogo} alt='Gruppenpraxis Medizin Mariahilf logo'></Image>
                        </a>
                    </div>
                    <a href="https://www.medizinmariahilf.at/wahlordination/" target='_blank'>
                        <h4>
                            Gruppenpraxis Medizin Mariahilf
                        </h4>
                    </a>
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
                        <Link href="/" className='book-btn'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>
                                {
                                    t("Book")
                                }
                            </span>
                        </Link>
                    </div>
                    <div className={styles.location}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4954545057676!2d16.346496200000004!3d48.197072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078b9f7daadd%3A0xf4cc95071955a277!2sMedizin%20Mariahilf!5e0!3m2!1sen!2seg!4v1758353796303!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Termine