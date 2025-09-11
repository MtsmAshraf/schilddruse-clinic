import React from 'react'
import styles from "./blog.module.css"
import BlogCards from '@/components/BlogCards/BlogCards'
import MainHeading from '@/components/MainHeading/MainHeading'
const BlogPage = () => {
  return (
    <section className={styles.blog}>
        <div className={styles.overlay}></div>
        <MainHeading>
            Blog
        </MainHeading>
        <div className="container">
          <BlogCards />
        </div>
    </section>
  )
}

export default BlogPage