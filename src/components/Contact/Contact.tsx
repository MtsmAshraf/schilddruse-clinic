import React from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'

const Contact = ({
    lo
} : {
    lo: string
}) => {

    const t = useTranslations("HomePage.Contact")

    const classNames = [
        lo === "ar" ? styles.ar : null,
        styles.contact
    ] 

  return (
    <section className={classNames.join(" ")}>
        <MainHeading>
            {
                t("Heading")
            }
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