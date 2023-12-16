import { allPosts,allPages } from "@/.contentlayer/generated"
import MainSection from "@/components/HomePage/MainSection"

export default function Home() {
    return <MainSection   posts={allPosts}/>
}