import React from 'react'
import styles from "./die-ordination.module.css"
import OrdinationComponent from '@/components/OrdinationComponent/OrdinationComponent'


const DieOrdination = () => {
  return (
    <section className={styles.dieOrdination}>
      <OrdinationComponent />
    </section>
  )
}

export default DieOrdination