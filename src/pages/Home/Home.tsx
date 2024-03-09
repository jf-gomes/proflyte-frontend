import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import RenderPosts from "../../components/RenderPosts/RenderPosts"
import ShowCategory from "../../components/ShowCategory/ShowCategory"
import { api } from "../../services/api"
import { AxiosResponse } from "axios"

interface postType {
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string,
    content: string,
    createdBy: string
}

export default function Home(){

    async function getPosts(){
        const response: AxiosResponse = await api.get('/post/get/0')
        const posts: postType[] = response.data
        setPosts(posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const [category, setCategory] = useState<string>('all')
    const [posts, setPosts] = useState<Array<postType>>([])

    return (
        <>
            <Header />
            <main className="flex flex-col p-12 gap-6">
                <h2 className="font-bold text-blue text-2xl">Principais notícias</h2>
                <ShowCategory category={category} setCategory={setCategory} />
                <RenderPosts posts={posts} type="all" />
            </main>
        </>
    )
}