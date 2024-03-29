import { categoriesObj } from "../Categories/Categories"
import { useDispatch } from "react-redux"
import { setPostData } from "../../features/post/post.slice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string,
    content: string,
    createdBy: string
}

interface RenderPostsProps{
    userName?: string,
    posts: PostType[],
    type: 'user' | 'all',
    category?: string
}

export default function RenderPosts({ category, userName, posts, type }: RenderPostsProps){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function renderCategory(tag: string): string{
        return categoriesObj[tag]
    }

    function renderPost(post: PostType){
        dispatch(setPostData(post))
        navigate(`/${post.id}`)
    }

    const [postsToRender, setPostsToRender] = useState<PostType[]>([])

    useEffect(() => {
        if (category == 'all'){
            setPostsToRender(posts)
        } else {
            const categoryPosts = posts.filter((post) => post.tag == category)
            setPostsToRender(categoryPosts)
        }
    }, [category])

    if (type == 'all') {
        return (
            <div className="flex flex-wrap gap-12">
                {postsToRender.map((post) => (
                <div key={post.id} className="flex gap-6 mb-12">
                    <img className="h-20 780:h-60 440:h-40 rounded-xl" src={post.img} alt={post.title} />
                    <div className="max-w-80 flex flex-col gap-2">
                        <h3 className="text-md 440:text-xl font-bold text-blue hover:underline cursor-pointer text-justify" onClick={() => renderPost(post)}>{post.title}</h3>
                        <p className="text-grey">{renderCategory(post.tag)}</p>
                        <p className="text-justify text-sm">{post.description}</p>
                    </div>
                </div>
            ))}
            </div>
        )
    } else {
        return (
            <section className="flex flex-col items-center gap-12">
            <h3 className="text-2xl font-bold">Publicações de {userName}</h3>
            {posts.map((post) => (
                <div key={post.id} className="flex gap-6 items-center">
                    <img className="max-w-40 780:max-w-96 440:max-w-60 rounded-xl" src={post.img} alt={post.title} />
                    <div className="max-w-80">
                        <p className="text-grey">{renderCategory(post.tag)}</p>
                        <h3 className="text-xl font-bold text-blue hover:underline cursor-pointer">{post.title}</h3>
                        <p className="text-justify">{post.description}</p>
                    </div>
                </div>
            ))}
            </section>
        )
    }
}