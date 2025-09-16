import React from 'react'
import styles from "./blog.module.css"
import BlogCards from '@/components/BlogCards/BlogCards'
const BlogPage = () => {
  return (
    <section className={styles.blog}>
        <div className={styles.overlay}></div>
        <BlogCards />
    </section>
  )
}

export default BlogPage