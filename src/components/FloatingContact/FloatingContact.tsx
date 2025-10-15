import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./floating-contact.module.css"
import { faComments, faCommentSms, faEnvelope, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'


const FloatingContact = () => {

    const t = useTranslations("FloatingContact")

    return (
        <div className={styles.floatingContact} >
            <h4>
                <FontAwesomeIcon icon={faComments} />
                <span>
                    {
                        t("Text")
                    }
                </span>
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
                        href="mailto:office@schilddruesemohammed.at?subject=Mail-From-Schilddrüse-website">
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
                <li>
                    <Link  
                        title={t("Telemedizin")}
                        href={"#telemedizin"}
                        >
                            <FontAwesomeIcon icon={faVideo}/>
                            <span>
                                {
                                    t("Telemedizin")
                                }
                            </span>
                    </Link>
                </li>
            </ul>
        </div>
)
}

export default FloatingContact