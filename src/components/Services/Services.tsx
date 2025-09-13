import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@/i18n/navigation'

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
                <Link href={"/"}>
                    <span>
                        Read More
                    </span>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </Link>
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
                <Link href={"/"}>
                    <span>
                        Read More
                    </span>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </Link>
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
                <Link href={"/"}>
                    <span>
                        Read More
                    </span>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </Link>
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
                <Link href={"/"}>
                    <span>
                        Read More
                    </span>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Services