interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string
}

interface RenderPostsProps{
    posts: PostType[],
    type: 'user' | 'all'
}

export default function RenderPosts({ posts, type }: RenderPostsProps){
    if (type == 'all') {
        return (
            <div className="columns-1 1100:columns-2 2400:columns-3">
                {posts.map((post) => (
                <div key={post.id} className="flex gap-6 mb-12">
                    <img className="max-w-40 780:max-w-80 440:max-w-60 rounded-xl" src={post.img} alt={post.title} />
                    <div className="max-w-80 flex flex-col gap-2">
                        <h3 className="text-md 440:text-xl font-bold text-blue hover:underline cursor-pointer">{post.title}</h3>
                        <p className="text-grey">{post.tag}</p>
                        <p className="text-justify text-sm">{post.description}</p>
                    </div>
                </div>
            ))}
            </div>
        )
    } else {
        return (
            <section className="flex flex-col items-center gap-12">
            <h3 className="text-2xl font-bold">Publicações de Maya Parvati</h3>
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