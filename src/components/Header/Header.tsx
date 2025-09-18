"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./header.module.css"
import Image from 'next/image'
import logo from "../../../public/images/logo-placeholder.png"
import Nav from '../Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import VerticalNav from '../VerticalNav/VerticalNav'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import LangSwitch from '../LangSwitch/LangSwitch'

gsap.registerPlugin(ScrollTrigger);


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

    // getting root element on the client side
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    useEffect(() => {
      // Runs only on client
      const el: HTMLElement = document.body;
      if (el) {
        setRootElement(el);
      }
    }, []); 

    // GSAP
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!headerRef.current) return;

      const header = headerRef.current;
      const trigger = ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === 1 && self.scroll() > 50) {
            // scrolling down
            gsap.to(header, { 
              backgroundColor: "#fff", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              duration: 0.3, 
              ease: "power2.out" 
            });
          } else if (self.scroll() <= 50) {
            // near top
            gsap.to(header, { 
              backgroundColor: "transparent", 
              boxShadow: "none",
              duration: 0.3, 
              ease: "power2.out" 
            });
          }
        },
      });

      return () => {
        trigger.kill();
      };
    }, []);

  return (
    <header ref={headerRef} className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
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