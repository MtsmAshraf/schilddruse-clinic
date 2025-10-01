"use client"
import React from 'react'
import styles from "./online-termine.module.css"
import Termine from '@/components/Termine/Termine'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Telemedizin from '@/components/Telemedizin/Telemedizin'

const OnlineTermine = () => {
  return (
    <Provider store={store}>
      <section className={styles.onlineTermine}>
        <Termine />
      </section>
      <Telemedizin />
    </Provider>
  )
}

export default OnlineTermine