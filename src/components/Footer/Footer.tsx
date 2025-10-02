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
                  Dr.med.univ. Fairoz Mohammed. Mariahilfer Str. 95, 1060 Wien
                </address>
                <p>
                  {t("Phone")}: 
                    <a href="tel:+436701960112 " target='_blank'>
                      +43 670 1960112
                    </a>
                </p>
                <p>
                  Email: 
                    <a href="mailto:office@schilddruesemohammed.at?subject=Mail-From-Schilddrüse-website" target='_blank'>
                      office@schilddruesemohammed.at
                    </a>
                </p>
                <a href="https://www.schilddruesemohammed.at">
                  www.schilddruesemohammed.at    
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