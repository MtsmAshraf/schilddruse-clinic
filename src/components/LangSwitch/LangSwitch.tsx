"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import styles from "./lang-switch.module.css"

const LangSwitch = ({
  lo
}: {
  lo: string
}) => {
    const pathname = usePathname()
    const router = useRouter()
    const changeLanguage = (selectedLang: string) => {
        const nextLocale = selectedLang;
        const splitPathname = pathname.split("/")
        splitPathname[1] = nextLocale;
        const jointPathname = splitPathname.join("/")
        router.replace(`${jointPathname}`)
    }
  return (
    <button className={styles.langSwitch}>
      <span onClick={() => {changeLanguage("de")}} className={lo === "de" ? styles.active : ""}>De</span>
      <span onClick={() => {changeLanguage("en")}} className={lo === "en" ? styles.active : ""}>En</span>
      {/* <span onClick={() => {changeLanguage("ar")}} className={lo === "ar" ? styles.active : ""}>Ar</span> */}
    </button>
  )
}

export default LangSwitch