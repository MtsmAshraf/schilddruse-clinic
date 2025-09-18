import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section className={styles.services}>
        <MainHeading>
            Our Services
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    General Dentistry
                </h4>
                <p>
                    Complete oral care for every smile with cleanings, exams, and more.
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    General Dentistry
                </h4>
                <p>
                    Complete oral care for every smile with cleanings, exams, and more.
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    General Dentistry
                </h4>
                <p>
                    Complete oral care for every smile with cleanings, exams, and more.
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    General Dentistry
                </h4>
                <p>
                    Complete oral care for every smile with cleanings, exams, and more.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services