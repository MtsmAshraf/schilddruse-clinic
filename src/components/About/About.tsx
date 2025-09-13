import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./about.module.css"

const About = () => {
  return (
    <section className={styles.about}>
        <MainHeading>
            About Us
        </MainHeading>
        <div className="container">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ullam veritatis iure, error possimus, cumque voluptatum, cum sunt consectetur officia at neque fugit nobis minus atque qui autem necessitatibus porro?
        </div>
    </section>
  )
}

export default About