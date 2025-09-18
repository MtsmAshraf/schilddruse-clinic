import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCommentSms, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Phone" target='_blank' href="https://www.linkedin.com/in/al-assema-compressor-52aba6227/">
                <FontAwesomeIcon icon={faPhone} />
            </a>
        </li>
        <li>
            <a title="Whatsapp" target='_blank' href="https://wa.me/201096953160">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
        <li>
            <a title="Gmail" target='_blank' href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </li>
        <li>
            <a title="SMS" target='_blank' href="https://www.facebook.com/assimacompressors">
                <FontAwesomeIcon icon={faCommentSms}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl