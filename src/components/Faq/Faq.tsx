import React from 'react'
import styles from "./faq.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Faq } from '../BlogCards/blogData'
const FaqComponent = ({
    faqs
} : {
    faqs: Faq[]
}) => {
  return (
    <section className={styles.faq}>
        <MainHeading>
            FAQ
        </MainHeading>
        <div className="container">
            <ul>
                {
                    faqs.map((faq: Faq, index: number) => {
                        return(
                            <li key={index}>
                                <button>
                                    <h3>
                                        {faq.question}
                                    </h3>
                                    <span>
                                        <FontAwesomeIcon icon={faChevronCircleDown} />
                                    </span>
                                </button>
                                <p>
                                    {faq.answer}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default FaqComponent