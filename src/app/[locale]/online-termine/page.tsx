import MainHeading from '@/components/MainHeading/MainHeading'
import React from 'react'
import styles from "./online-termine.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import BookBtn from '@/components/BookBtn/BookBtn'

const OnlineTermine = () => {
  return (
    <section className={styles.onlineTermine}>
      <MainHeading>
        Online-Termine
      </MainHeading>
      <div className="container"> 
        <h3>
          Dr. Mohammed Online-Termine
        </h3>
        <div className={styles.appts}>
            <div className={styles.apptOne}>
                <h4>
                    Gruppenpraxis Medizin Mariahilf
                </h4>
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    Mittwochs : 13:00-19:00 Uhr
                  </span>
                </p>
                <h5>
                  <FontAwesomeIcon icon={faLocationPin} />
              <span>
                    Mariahilfer Straße 95/19, Stiege 1, 1060 Wien (U3 Zieglergasse)
                  </span>
                </h5>
            </div>
            <div className={styles.apptTwo}>
                <h4>
                    SchilddrüsenordinationUbl
                </h4>
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    Freitags: 16:00- 19:00 Uhr 
                  </span>
                </p>
                <h5>
                  <FontAwesomeIcon icon={faLocationPin} />
                  <span>
                    Leegasse 2/8, 1140 Wien
                  </span>
                </h5>
            </div>
        </div>
        <div className={styles.btns + " " + "stagger-text"}>
            <BookBtn />
        </div>
      </div>
    </section>
  )
}

export default OnlineTermine