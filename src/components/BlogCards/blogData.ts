import { StaticImageData } from "next/image";


import blogTestImg from "../../../public/images/blog-post-img.webp"

export type BlogPost = {
    id: string;
    title: string;
    brief: string;
    date: string;
    author: string
    body: string;
    img: StaticImageData
}


const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Blog Post Title",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: blogTestImg
    },
    {
        id: "2",
        title: "Blog Post Title",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: blogTestImg
    },
    {
        id: "3",
        title: "Blog Post Post Post Title",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: blogTestImg
    },
    {
        id: "4",
        title: "Blog Post Title",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: blogTestImg
    },
]

export default blogPosts;