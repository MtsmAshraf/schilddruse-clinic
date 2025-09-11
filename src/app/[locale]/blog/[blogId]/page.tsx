import blogPosts, { BlogPost } from '@/components/BlogCards/blogData'
import { notFound } from 'next/navigation'
import styles from "./blog-post.module.css"
import React from 'react'
import Image from 'next/image'

const blogPostPage = async ({
    params,
} : {
    params: Promise<{blogId: string}> 
}) => {

    const { blogId } = await params
    const post = blogPosts.find((ele: BlogPost) => ele.id === blogId)
    if(!post){
        return notFound()
    }

  return (
    <section className={styles.blogPost}>
        <div className={styles.overlay}></div>
        <div className="container">
            <h2 className={styles.postTitle}>
                {
                    post.title
                }
            </h2>
            <div className={styles.postInfo}>
                <span>
                    By:
                </span>
                <span>
                    {
                        ` ${post.author}`
                    }
                </span>
                <span>
                    {
                        ` | ${post.date}`
                    }
                </span>
            </div>
            <div className={styles.postImg}>
                <Image src={post.img.src} alt={post.title + " cover image"} width={400} height={300}></Image>
            </div>
            <div className={styles.postBody}>
                {
                    post.body
                }
            </div>
        </div>
    </section>
  )
}

export default blogPostPage