import React from 'react'
import styles from "./prices.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

const Prices = () => {
    const t = useTranslations("HomePage.Prices")
  return (
    <section className={styles.prices}>
        <MainHeading>
            {
                t("Heading")
            }
        </MainHeading>
        <div className='container'>
            <div className={styles.card}>
                <h3>
                    {
                        t("Cards.0.H3")
                    }
                <p>
                    {
                        t("Cards.0.P")
                    }
                </p>
                </h3>
                <span>
                    €200
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    {
                        t("Cards.1.H3")
                    }
                <p>
                    {
                        t("Cards.1.P")
                    }
                </p>
                </h3>
                <span>
                    €140
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    {
                        t("Cards.2.H3")
                    }
                </h3>
                <span>
                    €250
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    {
                        t("Cards.3.H3")
                    }
                <p>
                    {
                        t("Cards.3.P")
                    }
                </p>
                </h3>
                <span>
                    €100
                </span>
            </div>
        </div>
    </section>
  )
}

export default Prices