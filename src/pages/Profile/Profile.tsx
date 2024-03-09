import { SlUserFollow } from "react-icons/sl";
import { useAppSelector } from '../../hooks/hooks';
import RenderPosts from '../../components/RenderPosts/RenderPosts';
import Header from "../../components/Header/Header";
import { AxiosResponse } from "axios";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string
}

interface DataType{
    id?: string,
    name: string,
    userName: string,
    email: string,
    img?: string,
    about: string,
    posts: PostType[] | any
}

export default function Profile(){

    const userData: DataType | undefined = useAppSelector((state) => state.changeUserData.data)

    async function getPosts(){
        const response: AxiosResponse = await api.get(`/post/get/${userData?.id}`)
        const posts: PostType = response.data
        setUserPosts(posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const [userPosts, setUserPosts] = useState<any>([])

    return (
        <>
            <Header />
            <main className='p-12 flex flex-col items-center gap-12'>
                <div className='flex gap-6 flex-wrap justify-center'>
                    <img className='max-h-128 max-w-80 440:max-w-96 640:max-w-xl rounded-xl' src={userData?.img} alt="" />
                    <div className='flex flex-col gap-6 max-w-2xl'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-3xl font-bold text-blue'>{userData?.userName}</h2>
                            <p className='flex items-center gap-2 hover:underline cursor-pointer'>Seguir <SlUserFollow /></p>
                        </div>  
                        <p className='text-justify'>{userData?.about}</p>
                    </div>
                </div>
                <RenderPosts userName={userData?.userName} posts={userPosts} type='user' />
            </main>
        </>
    )
}