"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import Image from 'next/image'
import logo from "../../../public/imgs/logo-placeholder.png"
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
import { PopupButton } from 'react-calendly'
// import { Link } from '@/i18n/navigation'

const Header = ({
    lo
  }: {
    lo: string
  }) => {
    const [showVNav, setShowVNav] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
      setShowVNav(false)
      console.log("false")
    },[pathname])
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
        <div className="container">
            <a className={styles.logo} href={"/"}>
                <Image loading='lazy' src={logo} alt='Al Assema Logo'></Image>
            </a>
            <Nav lo={lo}></Nav>
            <div className={styles.smCtrl}>
              <LangSwitch lo={lo}></LangSwitch>
              <button className={styles.bars} onClick={() => {setShowVNav(!showVNav)}}>
                  <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <button className={showVNav ? styles.close + " " + styles.shown : styles.close} onClick={() => {setShowVNav(!showVNav)}}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <VerticalNav lo={lo} shown={showVNav}></VerticalNav>
            {/* <SocialUl></SocialUl> */}
            <div className={styles.bookBtn}>
              <PopupButton
                className='book-btn'
                url="https://calendly.com/mo32000a/30min"
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementsByTagName("body")[0]}
                text="Book Appointment"
              />
            </div>
        </div>
    </header>
  )
}

export default Header