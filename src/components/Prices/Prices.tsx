"use client"
import React, { useState } from 'react'
import styles from "./prices.module.css"
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const Prices = () => {
    const t = useTranslations("HomePage.Prices")
    const [pricesShown, setPricesShown] = useState(false)
    const classNames = [
        'container',
        pricesShown ? styles.shown : ""
    ]
  return (
    <section className={styles.prices}>
        <button
            onClick={() => {setPricesShown(!pricesShown)}}
        >
            <span>
                {
                    t("Heading")
                }
            </span>
            <FontAwesomeIcon icon={faChevronCircleDown} style={{ transform: pricesShown ? `rotateZ(180deg)` : `rotate(0)` }}/>
        </button>
        <div className={classNames.join(" ")}>
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