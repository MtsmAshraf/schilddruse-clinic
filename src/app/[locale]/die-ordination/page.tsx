import React from 'react'
import styles from "./die-ordination.module.css"
import OrdinationComponent from '@/components/OrdinationComponent/OrdinationComponent'
import Termine from '@/components/Termine/Termine'
import Telemedizin from '@/components/Telemedizin/Telemedizin'


const DieOrdination = () => {
  return (
    <>
      <section className={styles.dieOrdination}>
        <OrdinationComponent />
      </section>
        <Termine />
        <Telemedizin />
    </>
  )
}

export default DieOrdination