import Services from '@/components/Services/Services'
import React from 'react'
import styles from "./services-page.module.css"

const ServicesPage = () => {
  return (
    <section className={styles.services}>
        <div className={styles.overlay}></div>   
        <Services    />
    </section>
  )
}

export default ServicesPage