import React from 'react'
import styles from "./logo-header.module.css"
import Image from 'next/image'
import logo from "../../../public/images/logo-text.webp"
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'


const LogoHeader = () => {
  const t = useTranslations("HomePage.Telemedizin")
  return (
    <div className={styles.logoHeader}>
        <Link href={"/"}>
          <Image src={logo} alt='logo'></Image>
        </Link>
        <Link href={"#telemedizin"}>
          <FontAwesomeIcon icon={faVideo} />
          <span>
            {
              t("Heading")
            }
          </span>
        </Link>
    </div>
  )
}

export default LogoHeader