import React from 'react'
import styles from "./about-page.module.css"
import About from '@/components/About/About'

const AboutPage = () => {
  return (
    <section className={styles.about}>
        <div className={styles.overlay}></div>   
        <About />
    </section>
  )
}

export default AboutPage