import React from 'react'
import blogPosts, { BlogPost } from './blogData'

const BlogCards = () => {
  return (
    <section>
        <ul>
            {
                blogPosts.map((post: BlogPost) => {
                    return(
                        
                    )
                })
            }
        </ul>
    </section>
  )
}

export default BlogCards