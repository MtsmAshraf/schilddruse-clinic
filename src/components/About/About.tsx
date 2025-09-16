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
            <h2>
              Dr.in Fairoz Mohammed
            </h2>
            <span>
              Nuklearmidizin und Schilddrüse 
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla quidem, atque explicabo libero perspiciatis nemo earum harum! Laboriosam deleniti inventore beatae nesciunt quibusdam. Tenetur perferendis placeat asperiores in quaerat.
            </p>
          </div>
          <div className={styles.img}>
            <Image src={drImg} alt="Dr.in Fairoz Mohammed"></Image>
          </div>
        </div>
    </section>
  )
}

export default About