import React from 'react'
import styles from "./blog.module.css"
import BlogCards from '@/components/BlogCards/BlogCards'

const BlogPage = async ({
  params
} : {
  params: Promise<{locale: string}>
}) => {
  const { locale } = await params
  return (
    <section className={styles.blog}>
        <div className={styles.overlay}></div>
        <BlogCards lo={locale} />
    </section>
  )
}

export default BlogPage