"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
import LangSwitch from '../LangSwitch/LangSwitch'


const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showVNav, setShowVNav] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
      setShowVNav(false)
    },[pathname])


  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
        <div className="container">
            <a className={styles.logo} href={"/"}>
                <Image loading='lazy' src={logo} alt='Al Assema Logo'></Image>
            </a>
            <Nav lo={lo}></Nav>
            <div className={styles.smCtrl}>
              {/* <LangSwitch lo={lo}></LangSwitch> */}
              <button className={styles.bars} onClick={() => {setShowVNav(!showVNav)}}>
                  <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <button className={showVNav ? styles.close + " " + styles.shown : styles.close} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <VerticalNav lo={lo} shown={showVNav}></VerticalNav>
            {/* <div className={styles.bookBtn}>
              <PopupButton
                className='book-btn'
                url="https://calendly.com/mo32000a/schilddruse"
                rootElement={rootElement!}
                text="Book Appointment"
              />
            </div> */}
            <LangSwitch lo={lo} />
        </div>
    </header>
  )
}

export default Header