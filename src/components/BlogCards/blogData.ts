import { StaticImageData } from "next/image";


import blogTestImg from "../../../public/images/blog-post-img.jpg"

export type BlogPost = {
    id: string;
    title: string;
    brief: string;
    body: string;
    img: StaticImageData
}


const blogPosts: BlogPost[] = [
    {
        id: "1";
        title: "Blog Post Title",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: blogTestImg
    }
]

export default blogPosts;