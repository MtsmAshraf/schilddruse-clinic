import React from 'react'
import blogPosts, { BlogPost } from './blogData'
import Image from 'next/image'
import styles from "./blog-cards.module.css"

const BlogCards = () => {
  return (
    <section>
        <div className="container">
            <ul>
                {
                    blogPosts.map((post: BlogPost) => {
                        return(
                            <li key={post.id}>
                                <div className={styles.cardImg}>
                                    <Image src={post.img.src} alt={post.title} width={200} height={200}></Image>
                                </div>
                                <h3>
                                    {post.title}
                                </h3>
                                <p>
                                    {
                                        post.brief
                                    }
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

export default BlogCards