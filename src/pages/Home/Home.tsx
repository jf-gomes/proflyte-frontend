import { useState } from "react"
import Header from "../../components/Header/Header"
import RenderPosts from "../../components/RenderPosts/RenderPosts"
import SelectCategory from "../../components/SelectCategory/SelectCategory"

type CategoryType = {
    category: 'all' | 'technology' | 'engineering' | 'business' | 'environment' | 'marketing' | 'jornalism' | 'archtechture' | 'education' | 'health' | 'industry' | 'design' | 'graphic computing' | 'public management'
}

export default function Home(){

    const data = [
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

    const [category, setCategory] = useState<string>('all')

    return (
        <>
            <Header loggedIn={false} />
            <main className="flex flex-col p-12 gap-6">
                <h2 className="font-bold text-blue text-2xl">Principais notícias</h2>
                <SelectCategory category={category} setCategory={setCategory} />
                <RenderPosts posts={data} type="all" />
            </main>
        </>
    )
}