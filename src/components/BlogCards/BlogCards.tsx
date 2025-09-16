import React from 'react'
import blogPosts, { BlogPost } from './blogData'
import Image from 'next/image'
import styles from "./blog-cards.module.css"
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../MainHeading/MainHeading'

const BlogCards = () => {
  return (
    <section className={styles.blogCards}>
        <MainHeading>
            Blog
        </MainHeading>
        <div className="container">
            <ul className={styles.cards}>
                {
                    blogPosts.map((post: BlogPost) => {
                        return(
                            <li key={post.id} className={styles.card}>
                                <Link href={`/blog/${post.id}`} className={styles.cardImg}>
                                    <Image src={post.img.src} alt={post.title} width={200} height={200}></Image>
                                </Link>
                                <div className={styles.cardText}>
                                    <h3>
                                        {post.title}
                                    </h3>
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
                                            post.brief
                                        }
                                    </p>
                                    <Link href={`/blog/${post.id}`}>
                                        <span>
                                            Read More
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