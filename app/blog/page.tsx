import { allPosts,allPages } from "@/.contentlayer/generated"
import BlogSection from "@/components/Blog/BlogSection"

export const metadata = {
    title: "Blog - Love Babbar",
    description: "Blog - Love Babbar",
}

export default function Home() {
    return <BlogSection   posts={allPosts}/>
}