import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./about.module.css"
import Image from 'next/image'
import drImg from "../../../public/images/doctor-img.jpg"


const About = () => {
  return (
    <section className={styles.about}>
        <MainHeading>
            About Us
        </MainHeading>
        <div className="container">
          <div className={styles.text}>
            <div className={styles.textHeading}>
              <h2>
                Dr.in Fairoz Mohammed
              </h2>
              <span>
                Nuklearmidizin und Schilddrüse 
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia beatae libero? Dignissimos amet sit molestiae? Veritatis, nulla ducimus, numquam distinctio dicta explicabo, minima asperiores natus quo quis iste eveniet!
              </p>
            </div>
            <div className={styles.textInfo}>
              <div>
                <h3>Qualifications</h3>
                <ul>
                  <li>
                    <p>
                    <span>
                      2018 - 2023
                    </span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ad earum ab eos quo libero qui impedit. Aperiam, modi ut id eveniet officiis reiciendis vero
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>
                      2018 - 2023
                    </span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ad earum ab eos quo libero qui impedit. Aperiam, modi ut id eveniet officiis reiciendis vero
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3>
                  Certificates
                </h3>
                <ul>
                  <li>
                    <p>
                    <span>2024</span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>2025</span>
                      amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Research</h3>
                <ul>
                  <li>
                    <p>
                    <span>2022</span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li>
                    <p>
                    <span>2023</span>
                      amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <Image src={drImg} alt="Dr.in Fairoz Mohammed"></Image>
          </div>
        </div>
    </section>
  )
}

export default About