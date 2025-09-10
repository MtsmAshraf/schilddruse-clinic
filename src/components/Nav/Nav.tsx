import React from 'react'
import styles from "./nav.module.css"
import LangSwitch from './LangSwitch/LangSwitch'
// import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/navigation'

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
                <Link className={pathname === `/${lo}/blog` ? styles.active : ""} href={'/blog'}>Blog</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>Services</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>About Us</Link>
            </li>
        </ul>
        <LangSwitch lo={lo}></LangSwitch>
    </nav>
  )
}

export default Nav