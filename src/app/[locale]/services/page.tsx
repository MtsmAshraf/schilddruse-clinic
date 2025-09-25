import React from 'react'
import styles from "./services.module.css"
import Services from '@/components/Services/Services'
const ServicesPage = () => {
  return (
        <section className={styles.services}>
            <Services />
        </section>
  )
}

export default ServicesPage