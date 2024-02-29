interface PostType{
    id: string,
    title: string,
    tags: string[],
    description: string,
    img: string
}

interface UserPosts{
    posts: PostType[]
}

export default function UserPosts({ posts }: UserPosts){

    function renderPosts(){
        return (
            posts.map((post) => (
                <div key={post.id} className="flex gap-6 items-center">
                    <img className="max-w-40 780:max-w-96 440:max-w-60 rounded-xl" src={post.img} alt={post.title} />
                    <div className="max-w-80">
                        <p className="text-grey">{post.tags[0]}</p>
                        <h3 className="text-xl font-bold text-blue hover:underline cursor-pointer">{post.title}</h3>
                        <p className="text-justify">{post.description}</p>
                    </div>
                </div>
            ))
        )
    }

    return (
        <section className="flex flex-col items-center gap-12">
            <h3 className="text-2xl font-bold">Publicações de Maya Parvati</h3>
            {renderPosts()}
        </section>
    )
}