import React from 'react'
import styles from "./prices.module.css"
import MainHeading from '../MainHeading/MainHeading'

const Prices = () => {
  return (
    <section className={styles.prices}>
        <MainHeading>
            Our Prices
        </MainHeading>
        <div className='container'>
            <div className={styles.card}>
                <h3>
                    First visit
                <p>
                    30–40 minutes
                </p>
                </h3>
                <span>
                    €200
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    Follow-up visit
                <p>
                    30–40 minutes
                </p>
                </h3>
                <span>
                    €140
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    Fine-needle aspiration + Ultrasound (thyroid biopsy)
                </h3>
                <span>
                    €250
                </span>
            </div>
            <div className={styles.card}>
                <h3>
                    Telemedicine
                <p>
                    30 minutes
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