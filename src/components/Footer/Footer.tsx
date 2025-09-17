import React from 'react'
import styles from "./footer.module.css"
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogleScholar, faLinkedinIn, faOrcid, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
            <h4>Social Media</h4>
            <div className={styles.socials}>
                <a href="https://www.youtube.com/@MoAbdalfttah" title='Youtube' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/mohamed.abotreka.547" title='Facebook' target='_blank'>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/mohmed-ahmed/" title='Linlkedin' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
                <a href="https://www.tiktok.com/@mo_abdalfttah?lang=ar" title='Whatsapp' target='_blank'>
                    <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                </a>
                <a href="https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar" title='Google Scholar' target='_blank'>
                    <FontAwesomeIcon icon={faGoogleScholar}></FontAwesomeIcon>
                </a>
                <a href="https://scholar.google.com/citations?user=vTOa4sIAAAAJ&hl=ar" title='ORCID' target='_blank'>
                    <FontAwesomeIcon icon={faOrcid}></FontAwesomeIcon>
                </a>
                <a href="mailto:mohamed.biotech98@gmail.com" title='Gmail' target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </a>
                <a href="https://x.com/mo_abdalfattah" title='X' target='_blank'>
                    <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
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