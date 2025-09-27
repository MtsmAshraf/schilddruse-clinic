import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/navigation'

import LangSwitch from '../LangSwitch/LangSwitch'
import { useTranslations } from 'next-intl'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
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
        <LangSwitch lo={lo} />
    </nav>
  )
}

export default Nav