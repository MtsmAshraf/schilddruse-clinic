import blogPosts, { BlogPost } from '@/components/BlogCards/blogData'
import { notFound } from 'next/navigation'
import styles from "./blog-post.module.css"
import React from 'react'
import Image from 'next/image'
import FaqComponent from '@/components/Faq/Faq'
import { Link } from '@/i18n/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { getTranslations } from 'next-intl/server'

const blogPostPage = async ({
    params,
} : {
    params: Promise<{blogId: string, locale: string}> 
}) => {

    const { blogId } = await params
    const post = blogPosts.find((ele: BlogPost) => ele.id === blogId)
    if(!post){
        return notFound()
    }
    const { locale } = await params

    const t = await getTranslations("Blog")

  return (
    <>
        <section className={styles.blogPost}>
            <div className={styles.overlay}></div>
            <div className="container">
                <h2 className={styles.postTitle}>
                    {
                        locale === "en" ?
                        post.titleEn : post.title
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
            </div>
        <FaqComponent faqs={locale === "en" ? post.faqsEn : post.faqs}/>
        <Link className={styles.allPostsLink} href={"/blog"}>
            <span>
                {
                    t("MorePosts")
                }
            </span>
            <FontAwesomeIcon icon={faArrowCircleRight} />
        </Link>
        </section>
    </>
  )
}

export default blogPostPage