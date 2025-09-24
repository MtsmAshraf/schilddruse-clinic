import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import styles from "./termine.module.css"
import { Link } from '@/i18n/navigation'

const Termine = () => {
  return (
    <section  className={styles.termine}>
        <MainHeading>
            Online-Termine
        </MainHeading>
        <div className="container"> 
            <h3>
                Dr.in Fairoz Mohammed Online-Termine
            </h3>
            <div className={styles.appts}>
                <div className={styles.apptOne}>
                    <h4>
                        Gruppenpraxis Medizin Mariahilf
                    </h4>
                    <p>
                        <FontAwesomeIcon icon={faClock} />
                        <span>
                        Mittwochs : 13:00-19:00 Uhr
                        </span>
                    </p>
                    <h5>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <span>
                        Mariahilfer Straße 95/19, Stiege 1, 1060 Wien (U3 Zieglergasse)
                        </span>
                    </h5>
                    <div className={styles.btns}>
                        <Link className='book-btn main' href="/">
                        Book Appointment
                        </Link>
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
                        Freitags: 16:00- 19:00 Uhr 
                        </span>
                    </p>
                    <h5>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <span>
                        Leegasse 2/8, 1140 Wien
                        </span>
                    </h5>
                    <div className={styles.btns}>
                        <a className='book-btn main' href="https://www.meinarztonline.at/app/api/onlineBookingFrame/24205/bookingStep/1" target='_blank'>
                        Book Appointment
                        </a>
                    </div>
                    <div className={styles.location}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8322035616325!2d16.293149900000003!3d48.190584400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da70a3284003d%3A0xa760ce3ed98dfa39!2sSchilddr%C3%BCsenordination%20Ubl!5e0!3m2!1sen!2seg!4v1758706179416!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {/* <div className={styles.btns + " " + "stagger-text"}>
                <BookBtn />
            </div> */}
        </div>
    </section>
  )
}

export default Termine