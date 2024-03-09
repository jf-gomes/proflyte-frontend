import { categoriesObj } from "../Categories/Categories"
import { useDispatch } from "react-redux"
import { setPostData } from "../../features/post/post.slice"
import { useNavigate } from "react-router-dom"

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
    type: 'user' | 'all'
}

export default function RenderPosts({ userName, posts, type }: RenderPostsProps){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function renderCategory(tag: string): string{
        return categoriesObj[tag]
    }

    function renderPost(post: PostType){
        dispatch(setPostData(post))
        navigate(`/${post.id}`)
    }

    if (type == 'all') {
        return (
            <div className="columns-1 1100:columns-2 2400:columns-3">
                {posts.map((post) => (
                <div key={post.id} className="flex gap-6 mb-12">
                    <img className="max-w-40 780:max-w-80 440:max-w-60 rounded-xl max-h-60" src={post.img} alt={post.title} />
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
                        <p className="text-grey">{post.tag}</p>
                        <h3 className="text-xl font-bold text-blue hover:underline cursor-pointer">{post.title}</h3>
                        <p className="text-justify">{post.description}</p>
                    </div>
                </div>
            ))}
            </section>
        )
    }
}