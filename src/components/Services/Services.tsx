import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCapsules, faChildren, faCircleRadiation, faMagnifyingGlass, faPersonPregnant, faSquarePollVertical, faStethoscope, faSyringe, faVial } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'

const Services = () => {
    const t = useTranslations("HomePage.Services")
  return (
    <section className={styles.services}>
        <MainHeading>
            {
                t("Heading")
            }
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faVial} />
                </div>
                <h4>
                    {
                        t("Cards.0.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.0.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faCircleRadiation} />
                </div>
                <h4>
                    {
                        t("Cards.1.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.1.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faSyringe} />
                </div>
                <h4>
                    {
                        t("Cards.2.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.2.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                </div>
                <h4>
                    {
                        t("Cards.3.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.3.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faPersonPregnant} />
                </div>
                <h4>
                    {
                        t("Cards.4.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.4.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <h4>
                    {
                        t("Cards.5.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.5.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
                <h4>
                    {
                        t("Cards.6.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.6.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    {
                        t("Cards.7.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.7.p")
                    }
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faChildren} />
                </div>
                <h4>
                    {
                        t("Cards.8.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.8.p")
                    }
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services