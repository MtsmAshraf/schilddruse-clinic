import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import styles from "./termine.module.css"
import BookBtn from '../BookBtn/BookBtn'
import { useTranslations } from 'next-intl'

const Termine = () => {

    const t = useTranslations("HomePage.OnlineTermine")
    const tBook = useTranslations("BookBtn")

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
            <div className={styles.appts}>
                <div className={styles.apptOne}>
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
                <div className={styles.apptTwo}>
                    <h4>
                        SchilddrüsenordinationUbl
                    </h4>
                    <p>
                        <FontAwesomeIcon icon={faClock} />
                        <span>
                        {t("Appts.1.day")} : 16:00- 19:00 {t("Appts.1.Uhr")}
                        </span>
                    </p>
                    <h5>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <span>
                            {
                                t("Appts.1.address")
                            }
                        </span>
                    </h5>
                    <div className={styles.btns}>
                        <a className='book-btn main' href="https://www.meinarztonline.at/app/api/onlineBookingFrame/24205/bookingStep/1" target='_blank'>
                            {
                                tBook("Text")
                            }
                        </a>
                    </div>
                    <div className={styles.location}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8322035616325!2d16.293149900000003!3d48.190584400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da70a3284003d%3A0xa760ce3ed98dfa39!2sSchilddr%C3%BCsenordination%20Ubl!5e0!3m2!1sen!2seg!4v1758706179416!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {/* <div className={styles.btns + " " + "stagger-text"}>
                <BookBtn lo={lo} />
            </div> */}
        </div>
    </section>
  )
}

export default Termine