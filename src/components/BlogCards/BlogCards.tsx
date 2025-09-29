import React from 'react'
import blogPosts, { BlogPost } from './blogData'
import Image from 'next/image'
import styles from "./blog-cards.module.css"
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'

const BlogCards = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("Blog")
  return (
    <section className={styles.blogCards}>
        <MainHeading>
            {
                t("Heading")
            }
        </MainHeading>
        <div className="container">
            <ul className={styles.cards}>
                {
                    blogPosts.map((post: BlogPost) => {
                        return(
                            <li key={post.id} className={styles.card}>
                                <Link href={`/blog/${post.id}`} className={styles.cardImg}>
                                    <Image loading='lazy' src={post.img.src} alt={post.title} width={200} height={200}></Image>
                                </Link>
                                <div className={styles.cardText}>
                                    {
                                        post.cardTitle === false ? 
                                        <h3>
                                            {
                                                lo === "en" ? post.titleEn : post.title
                                            }
                                        </h3> 
                                        :
                                        null
                                    }
                                    <div>
                                        <h5>
                                            {
                                                post.author
                                            }
                                        </h5>
                                        <span>
                                            {
                                                post.date
                                            }
                                        </span>
                                    </div>
                                    <p>
                                        {
                                            lo === "en" ?
                                            post.briefEn : post.brief
                                        }
                                    </p>
                                    <Link href={`/blog/${post.id}`}>
                                        <span>
                                            {
                                                t("ReadMore")
                                            }
                                        </span>
                                        <FontAwesomeIcon icon={faCircleArrowRight} />
                                    </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default BlogCards