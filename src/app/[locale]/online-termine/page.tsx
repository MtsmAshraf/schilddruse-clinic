import React from 'react'
import styles from "./online-termine.module.css"
import Termine from '@/components/Termine/Termine'

const OnlineTermine = () => {
  return (
    <section className={styles.onlineTermine}>
      <Termine />
    </section>
  )
}

export default OnlineTermine