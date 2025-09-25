import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/navigation'

import LangSwitch from '../LangSwitch/LangSwitch'

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
                {/* <Link className={pathname.split("/").includes("blog") ? styles.active : ""} href={'/blog'}>Blog</Link> */}
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>Services</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/online-termine` ? styles.active : ""} href={'/online-termine'}>Online-Termine</Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/die-ordination` ? styles.active : ""} href={'/die-ordination'}>Die Ordination</Link>
            </li>
        </ul>
        {/* <div className={styles.navSocialLinks}>
                <a title="Whatsapp" target='_blank' href="https://wa.me/+436701960112">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                </a>
                <a title="Gmail" target='_blank' href="mailto:schilddruese.mohammed@outlook.com?subject=Mail-From-Schilddrüse-website">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a title="SMS" target='_blank' href="sms:+436701960112">
                    <FontAwesomeIcon icon={faCommentSms}/>
                </a>
        </div> */}
        <LangSwitch lo={lo} />
    </nav>
  )
}

export default Nav