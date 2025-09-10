import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
    const pathname = usePathname()
    const t = useTranslations("HomePage.Header")
   
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        <h3>Language</h3>
        <LangSwitch lo={lo}></LangSwitch>
        <h3>Pages</h3>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>Home</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/products` ? styles.active : ""} href={'/products'}>Products</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>Services</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>About Us</Link>
            </li>
        </ul>
        <h3>Social Media</h3>
        <SocialUl></SocialUl>
    </div>
  )
}

export default VerticalNav