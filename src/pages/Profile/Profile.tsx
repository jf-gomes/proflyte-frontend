import { SlUserFollow } from "react-icons/sl";
import { useAppSelector } from '../../hooks/hooks';
import RenderPosts from '../../components/RenderPosts/RenderPosts';
import Header from "../../components/Header/Header";

export default function Profile(){

    const userPosts = [
        {
            id: '0',
            title: 'Título',
            tags: ['technology', 'brazil'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: '1',
            title: 'Título 2',
            tags: ['technology', 'brazil'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: '2',
            title: 'Título 3',
            tags: ['technology', 'brazil'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: '3',
            title: 'Título 4',
            tags: ['technology', 'brazil'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    const isLoggedIn = useAppSelector((state) => state.changeIsLoggedIn.value)

    return (
        <>
            <Header loggedIn={true} />
            <main className='p-12 flex flex-col items-center gap-12'>
                <div className='flex gap-6 flex-wrap justify-center'>
                    <img className='max-w-80 440:max-w-96 640:max-w-xl rounded-xl' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='flex flex-col gap-6 max-w-2xl'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-3xl font-bold text-blue'>Maya Parvati</h2>
                            <p className='flex items-center gap-2 hover:underline cursor-pointer'>Seguir <SlUserFollow /></p>
                        </div>  
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit quia porro pariatur totam, vero accusantium vitae eius repellendus rerum dolorum quis debitis quo reiciendis, quidem harum eveniet distinctio mollitia!</p>
                    </div>
                </div>
                <RenderPosts posts={userPosts} type='user' />
            </main>
        </>
    )
}