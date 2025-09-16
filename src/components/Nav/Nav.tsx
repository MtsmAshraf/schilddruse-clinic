import React from 'react'
import styles from "./nav.module.css"
// import LangSwitch from './LangSwitch/LangSwitch'
// import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    // const t = useTranslations("HomePage.Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>Home</Link>
            </li>
            <li>
                <Link className={pathname.split("/").includes("blog") ? styles.active : ""} href={'/blog'}>Blog</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>Services</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>About Us</Link>
            </li>
        </ul>
        <div className={styles.navSocialLinks}>
            <a href="www.facebook.com" title='Phone'>
                <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="www.facebook.com" title='Whatsapp'>
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="www.facebook.com" title='Email'>
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    </nav>
  )
}

export default Nav