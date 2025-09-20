import React from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import SocialUl from '../SocialUl/SocialUl'

const Contact = ({
    lo
} : {
    lo: string
}) => {

    const classNames = [
        lo === "ar" ? styles.ar : null,
        styles.contact
    ] 

  return (
    <section className={classNames.join(" ")}>
        <MainHeading>
            {/* {t("Heading")} */}
            Contact Us
        </MainHeading>
        <div className="container">
            <div className={styles.info}>
                <div className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                        Street, City, Austria 
                    </address>
                </div>
                <div>
                    <SocialUl />
                </div>
            </div>
            <div className={styles.location}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4954545057676!2d16.346496200000004!3d48.197072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078b9f7daadd%3A0xf4cc95071955a277!2sMedizin%20Mariahilf!5e0!3m2!1sen!2seg!4v1758353796303!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact