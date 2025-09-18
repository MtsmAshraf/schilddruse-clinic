import React from 'react'
import styles from "./blog.module.css"
import BlogCards from '@/components/BlogCards/BlogCards'
import Faq from '@/components/Faq/Faq'
const BlogPage = () => {
  return (
    <section className={styles.blog}>
        <div className={styles.overlay}></div>
        <BlogCards />
        <Faq />
    </section>
  )
}

export default BlogPage