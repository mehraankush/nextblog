import { allPosts,allPages } from "@/.contentlayer/generated"
import BlogSection from "@/components/Blog/BlogSection"


export default function Home() {
    return <BlogSection   posts={allPosts}/>
}