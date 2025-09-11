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
    const blogPost = blogPosts.find((ele: BlogPost) => ele.id === blogId)
    if(!blogPost){
        return notFound()
    }

  return (
    <section className={styles.blogPost}>
        <div className={styles.overlay}></div>
        <div className="container">
            <h2 className={styles.postTitle}>
                {
                    blogPost.title
                }
            </h2>
            <div className={styles.postImg}>
                <Image src={blogPost.img.src} alt={blogPost.title + " cover image"} width={400} height={300}></Image>
            </div>
            <div className={styles.postBody}>
                {
                    blogPost.body
                }
            </div>
        </div>
    </section>
  )
}

export default blogPostPage