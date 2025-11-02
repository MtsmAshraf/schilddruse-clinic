"use client"
import React from 'react'
import styles from "./footer.module.css"
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import PopupModal from '../PopupModal/PopupModal'
const Footer = ({
  lo
} : {
  lo: string
}) => {
  const t = useTranslations("Footer")
  return (
    
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.footerSocialLinks}>
              <h4>
                {
                  t("Info")
                }
              </h4>
              <div>
                <address>
                  Drin med.univ. Fairoz Mohammed Mariahilfer Straße 95, Top 19- 1060, Wien
                </address>
                <p>
                  {t("Phone")}: 
                    <a href="tel:+436701960112 " target='_blank'>
                      +43 670 1960112
                    </a>
                </p>
                <p>
                  Email: 
                    <a href="mailto:office@schilddruesenmedizin.at?subject=Mail-From-Schilddrüse-website" target='_blank'>
                      office@schilddruesenmedizin.at
                    </a>
                </p>
                <a href="https://www.schilddruesenmedizin.at">
                  www.schilddruesenmedizin.at    
                </a>
                <p>
                  Bank Austria: 
                  <span>
                    IBAN: AT821200010046435458. <br /> BIC: BKAUATWWXXX
                  </span>
                  <br />
                  <b>
                    {t("Note")}
                  </b>
                </p>
              </div>
            </div>
            <div className={styles.pages}>
              <div>
                <Link href={"/datenschutz"}>
                  {t("Datenschutz")}
                </Link>
              </div>
            </div>
        </div>
        <div className={styles.copyright}>
            by: &copy; <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>
                Moatasim
            </a>  2025
        </div>
        <Provider store={store}>
          <PopupModal />
        </Provider>
    </footer>
  )
}

export default Footer