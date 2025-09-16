import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./floating-contact.module.css"


const FloatingContact = () => {
    return (
        <a 
            className={styles.floatingContact} 
            href='https://wa.me/2010' 
            target='_blank'>
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
)
}

export default FloatingContact