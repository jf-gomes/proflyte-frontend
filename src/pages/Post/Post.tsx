import Header from "../../components/Header/Header";

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string
}

interface PostProps{
    post: PostType | undefined
}

export default function Post({ post }: PostProps){
    return (
        <>
            <Header />
            <main>
                <p>{post?.title}</p>
            </main>
        </>
    )
}