import Header from "../../components/Header/Header";

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string,
    content: string,
    createdBy: string
}

interface PostProps{
    post: PostType | undefined
}

export default function Post({ post }: PostProps){
    return (
        <>
            <Header />
            <main>
                <img src={post?.img} alt="" className="w-9/12 h-96 mx-auto m-6 rounded" />
                <h2 className="text-center font-bold">{post?.title}</h2>
                <p>{post?.content}</p>
            </main>
        </>
    )
}