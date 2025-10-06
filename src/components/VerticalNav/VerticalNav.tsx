import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
// import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import LangSwitch from '../LangSwitch/LangSwitch'
import { useTranslations } from 'next-intl'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
    const pathname = usePathname()
    const t = useTranslations("Header")
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        <h3>
            {
                t("Pages")
            }
        </h3>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>
                    {
                        t("Home")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/online-termine` ? styles.active : ""} href={'/online-termine'}>
                    {
                        t("OnlineTermine")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>
                    {
                        t("Services")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/die-ordination` ? styles.active : ""} href={'/die-ordination'}>
                    {
                        t("DieOrdination")
                    }
                </Link>
            </li>
        </ul>
        <h3>
            {
                t("ContactUs")
            }
            </h3>
        <div className={styles.social}>
            <SocialUl />
        </div>
        <h3>
            {
                ("Language")
            }
            </h3>
        <div className={styles.language}>
            <LangSwitch lo={lo} />
        </div>
    </div>
  )
}

export default VerticalNav