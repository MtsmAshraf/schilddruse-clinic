import React from 'react'
import styles from "./footer.module.css"
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentSms, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Footer = ({
  lo
} : {
  lo: string
}) => {
  return (
    
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div>
            <h4>Pages</h4>
            <div>
                <Link href={"/"}>
                  Home
                </Link>
                <Link href={`/services`}>
                  Services
                </Link>
                <Link href={`/blog`}>
                  Blog
                </Link>
                <Link href={`/about`}>
                  About Us
                </Link>
            </div>
            </div>
            <div>
            <h4>Contact Us</h4>
            <div className={styles.socials}>
              <a title="Phone" target='_blank' href="tel:+436701960112">
                  <FontAwesomeIcon icon={faPhone} />
              </a>
              <a title="Whatsapp" target='_blank' href="https://wa.me/+436701960112">
                  <FontAwesomeIcon icon={faWhatsapp}/>
              </a>
              <a title="Gmail" target='_blank' href="mailto:schilddruese.mohammed@outlook.com?subject=Mail-From-Schilddrüse-website">
                  <FontAwesomeIcon icon={faEnvelope}/>
              </a>
              <a title="SMS" target='_blank' href="sms:+436701960112">
                  <FontAwesomeIcon icon={faCommentSms}/>
              </a>
            </div>
            </div>
        </div>
        <div className={styles.copyright}>
            by: &copy; <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>
                Moatasim
            </a>  2025
        </div>
    </footer>
  )
}

export default Footer