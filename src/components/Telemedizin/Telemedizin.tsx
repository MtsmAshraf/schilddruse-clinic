import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./telemedizin.module.css"
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'

const Telemedizin = () => {
    const t = useTranslations("HomePage.Telemedizin")
    return (
        <section className={styles.telemedizin} id='telemedizin'>
            <MainHeading>
                {
                    t("Heading")
                }
            </MainHeading>
            <div className="container">
                <p>
                    {
                        t("p")
                    }
                    <br />
                    <span>
                        {
                            t("span")
                        }
                    </span>
                </p>
                <h3>
                    {
                        t("ContactUs")
                    }
                </h3>
                <SocialUl />
            </div>
        </section>
    )
}

export default Telemedizin