import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./floating-contact.module.css"
import { faCommentSms, faEnvelope } from '@fortawesome/free-solid-svg-icons'


const FloatingContact = () => {
    return (
        <div className={styles.floatingContact} >
            <h4>
                Contact Us
            </h4>
            <ul>
                <li>
                    <a 
                        title="Whatsapp" 
                        target='_blank'
                        href="https://wa.me/+436701960112"
                        >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
                <li>
                    <a 
                        title="Gmail" 
                        target='_blank' 
                        href="mailto:schilddruese.mohammed@outlook.com?subject=Mail-From-Schilddrüse-website">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </li>
                <li>
                    <a 
                        title="SMS" 
                        target='_blank' 
                        href="sms:+436701960112">
                        <FontAwesomeIcon icon={faCommentSms}/>
                    </a>
                </li>
            </ul>
        </div>
)
}

export default FloatingContact