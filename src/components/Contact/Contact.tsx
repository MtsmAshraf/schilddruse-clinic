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
                {/* <div className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                        Mariahilfer Straße 95/19, Stiege 1,<br />
                        1060 Wien (U3 Zieglergasse), <br />
                        Österreich
                    </address>
                </div> */}
                <div>
                    <SocialUl />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact