import React from 'react'
import styles from "./faq.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
const Faq = () => {
  return (
    <section className={styles.faq}>
        <MainHeading>
            FAQ
        </MainHeading>
        <div className="container">
            <ul>
                <li>
                    <button>
                        <h3>What is the available information about that disease</h3>
                        <span>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </span>
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis, quas id molestias delectus vel, praesentium voluptate repudiandae a quidem quae ullam molestiae iste itaque sapiente hic quo vero minus! <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia in beatae expedita quod ipsum eum? Suscipit quasi quisquam laborum corrupti sit dolores dolorum dolorem porro non. Autem, necessitatibus eum!
                    </p>
                </li>
                <li>
                    <button>
                        <h3>What is the available information about that disease</h3>
                        <span>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </span>
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis, quas id molestias delectus vel, praesentium voluptate repudiandae a quidem quae ullam molestiae iste itaque sapiente hic quo vero minus!
                    </p>
                </li>
                <li>
                    <button>
                        <h3>What is the available information about that disease</h3>
                        <span>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </span>
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis, quas id molestias delectus vel, praesentium voluptate repudiandae a quidem quae ullam molestiae iste itaque sapiente hic quo vero minus!
                    </p>
                </li>
                <li>
                    <button>
                        <h3>What is the available information about that disease</h3>
                        <span>
                            <FontAwesomeIcon icon={faChevronCircleDown} />
                        </span>
                    </button>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis, quas id molestias delectus vel, praesentium voluptate repudiandae a quidem quae ullam molestiae iste itaque sapiente hic quo vero minus!
                    </p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Faq