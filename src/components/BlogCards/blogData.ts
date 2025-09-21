import { StaticImageData } from "next/image";


import hashimotoImg from "../../../public/images/hashimoto.png"
import morbusImg from "../../../public/images/morbus.png"
import pregnancyImg from "../../../public/images/thyroid-pregnancy.png"
import thyroidNodulesImg from "../../../public/images/thyroid-nodules.jpeg"

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
        title: "Hashimoto",
        brief: "Hashimoto-Thyreoiditis ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse angreift. Häufig führt dies zu einer Schilddrüsenunterfunktion.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: hashimotoImg
    },
    {
        id: "2",
        title: "Morbus Basedow",
        brief: "Morbus Basedow ist eine Autoimmunerkrankung, bei der das Immunsystem die Schilddrüse überstimuliert. Dadurch entsteht eine Überfunktion der Schilddrüse (Hyperthyreose).",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: morbusImg
    },
    {
        id: "3",
        title: "Thyroid and pregnancy",
        brief: "Die Schilddrüse produziert Hormone (T4 und T3), die für die Entwicklung des Gehirns und des Nervensystems des Babys entscheidend sind – besonders im 1. Trimester, wenn das Kind noch keine eigenen Hormone bilden kann.",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: pregnancyImg
    },
    {
        id: "4",
        title: "Schilddrüsen-knoten",
        brief: "Blog Post brief Blog Post brief Blog Post brief Blog Post brief",
        date: "Septemper, 2025",
        author: "Dr.in Fairoz Mohammed",
        body: "Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body. Blog Post body Blog Post body Blog Post body Blog Post body Blog Post body.",
        img: thyroidNodulesImg
    },
]

export default blogPosts;