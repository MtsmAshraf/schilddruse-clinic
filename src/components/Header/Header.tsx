import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.webp"
import styles from "./header.module.css"
import LangSwitch from '../LangSwitch/LangSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { useTranslations } from 'next-intl'


const Header = ({
  lo
} : {
  lo: string
}) => {
  const t = useTranslations("HomePage.Header")
  return (
    <header className={lo === "ar" ? styles.header + " " + styles.ar : styles.header}>
      <div className="container">
        <div>
          <LangSwitch lo={lo}></LangSwitch>
        </div>
        <div>
          <Link id="logo" href={"/"} className={styles.logo}>
            <Image src={logo} alt='Sahl Cars Logo'></Image>
          </Link>
        </div>
        <div className={styles.links}>
          <div>
            <a href="https://wa.me/+966505638988" target='_blank'>
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>
                {t("whatsapp")}
              </span>
            </a>
            <a href="tel:+966505638988">
              <FontAwesomeIcon icon={faPhone} />
              <span>
                +966505638988
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header