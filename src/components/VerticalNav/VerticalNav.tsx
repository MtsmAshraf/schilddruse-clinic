import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
// import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import LangSwitch from '../LangSwitch/LangSwitch'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
    const pathname = usePathname()
    // const t = useTranslations("HomePage.Header")
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        {/* <h3>Language</h3> */}
        {/* <LangSwitch lo={lo}></LangSwitch> */}
        <h3>Pages</h3>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>Home</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/blog` ? styles.active : ""} href={'/blog'}>Blog</Link>
            </li>
            
            <li>
                <Link className={pathname === `/${lo}/online-termine` ? styles.active : ""} href={'/online-termine'}>Online-Termine</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/die-ordination` ? styles.active : ""} href={'/die-ordination'}>Die Ordination</Link>
            </li>
        </ul>
        <h3>Social Media</h3>
        <div className={styles.social}>
            <SocialUl />
        </div>
        <h3>Language</h3>
        <div className={styles.language}>
            <LangSwitch lo={lo} />
        </div>
    </div>
  )
}

export default VerticalNav