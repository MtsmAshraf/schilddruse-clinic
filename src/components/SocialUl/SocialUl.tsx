import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCommentSms, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Phone" target='_blank' href="tel:+436701960112">
                <FontAwesomeIcon icon={faPhone} />
            </a>
        </li>
        <li>
            <a title="Whatsapp" target='_blank' href="https://wa.me/+436701960112">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
        <li>
            <a title="Gmail" target='_blank' href="mailto:schilddruese.mohammed@outlook.com?subject=Mail-From-Schilddrüse-website">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </li>
        <li>
                <a title="SMS" target='_blank' href="sms:+436701960112">
                <FontAwesomeIcon icon={faCommentSms}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl