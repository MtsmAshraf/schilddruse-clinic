import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCapsules, faChildren, faCircleRadiation, faMagnifyingGlass, faPersonPregnant, faSquarePollVertical, faStethoscope, faSyringe, faVial } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section className={styles.services}>
        <MainHeading>
            Our Services
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faVial} />
                </div>
                <h4>
                    Neck ultrasound & blood tests
                </h4>
                <p>
                    ck ultrasound & blood tests performed in the clinic
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faCircleRadiation} />
                </div>
                <h4>
                    Scintigraphy
                </h4>
                <p>
                    intigraphy if necessary, in cooperation with specialized centers
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faSyringe} />
                </div>
                <h4>
                    Targeted ultrasound-guided fine-needle aspiration
                </h4>
                <p>
                    Targeted ultrasound-guided fine-needle aspiration in selected cases (e.g., suspicious nodules)
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                </div>
                <h4>
                    Evaluation & treatment of thyroid dysfunctions
                </h4>
                <p>
                    Evaluation & treatment of thyroid dysfunctions (hyperthyroidism, hypothyroidism, Hashimoto’s, Graves’ disease …)
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faPersonPregnant} />
                </div>
                <h4>
                    Thyroid and fertility care.
                </h4>
                <p>
                    Thyroid and fertility care, including pregnancy management
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <h4>
                    Assessment of thyroid nodules
                </h4>
                <p>
                    Assessment of thyroid nodules
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faCapsules} />
                </div>
                <h4>
                    Counseling on therapy options
                </h4>
                <p>
                    Counseling on therapy options (medication, surgery, radioactive iodine therapy)
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faStethoscope} />
                </div>
                <h4>
                    Follow-ups
                </h4>
                <p>
                    Follow-up of thyroid cancer patients after surgery
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faChildren} />
                </div>
                <h4>
                    Children with thyroid dysfunction or nodules
                </h4>
                <p>
                    Children (from 5 years) with thyroid dysfunction or nodules
                </p>
            </div>
        </div>
    </section>
  )
}

export default Services