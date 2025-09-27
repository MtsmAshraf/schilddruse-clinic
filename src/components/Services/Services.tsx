import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import cardAuf from "../../../public/images/card-anf.png";
import cardBeur from "../../../public/images/card-beur.png";
import cardBluta from "../../../public/images/card-bluta.png";
import cardFein from "../../../public/images/card-fein.png";
import cardKinder from "../../../public/images/card-kinder.png";
import cardNach from "../../../public/images/card-nach.png";
import cardPregnancy from "../../../public/images/card-pregnancy.png";
import cardSzint from "../../../public/images/card-szint.png";
import cardTs from "../../../public/images/card-ts.png";
import cardUltra from "../../../public/images/card-ultra.png";

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
                    <Image src={cardBluta} alt='card image'></Image>
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
                    <Image src={cardUltra} alt='card image'></Image>
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
                    <Image src={cardSzint} alt='card image'></Image>
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
                    <Image src={cardFein} alt='card image'></Image>
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
                    <Image src={cardTs} alt='card image'></Image>
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
                    <Image src={cardPregnancy} alt='card image'></Image>
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
                    <Image src={cardBeur} alt='card image'></Image>
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
                    <Image src={cardAuf} alt='card image'></Image>
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
                    <Image src={cardNach} alt='card image'></Image>
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
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <Image src={cardKinder} alt='card image'></Image>
                </div>
                <h4>
                    {
                        t("Cards.9.Title")
                    }
                </h4>
                <p>
                    {
                        t("Cards.9.p")
                    }
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services