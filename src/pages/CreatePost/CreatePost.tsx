import Header from "../../components/Header/Header"
import { categories } from "../../components/Categories/Categories"
import { api } from "../../services/api"
import { useAppSelector } from "../../hooks/hooks"
import { useRef, useState } from "react"

interface PostType{
    id: string,
    title: string,
    tag: string,
    description: string,
    img: string
}

interface DataType{
    id: string,
    name: string,
    userName: string,
    email: string,
    img?: string,
    about: string,
    posts: PostType[] | any
}

export default function CreatePost(){

    const categoriesToRender = categories.filter((category) => category.name != 'all')

    const userData: DataType | undefined = useAppSelector((state) => state.changeUserData.data)

    const titleRef = useRef<HTMLInputElement>(null)
    const [tag, setTag] = useState<string>()
    const descriptionRef = useRef<HTMLInputElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(e: React.FormEvent<HTMLInputElement>){
        e.preventDefault()
        const response = api.patch(`/users/${userData?.id}`, {
            title: titleRef,
            tag: tag,
            description: descriptionRef,
            img: imgRef,
            content: contentRef
        })
        console.log(response)
    }

    return (
        <>
            <Header loggedIn={true} />
            <main className="p-12 flex flex-col items-center">
                <form className="flex flex-col gap-4 w-80 440:w-96" action="">
                    <label htmlFor="">Título da notícia</label>
                    <input ref={titleRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="" id="" />
                    <label htmlFor="">Descrição da notícia</label>
                    <input ref={descriptionRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="" id="" />
                    <label htmlFor="">Sua publicação</label>
                    <input ref={contentRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg h-60" type="text" name="" id="" />
                    <label htmlFor="">Selecione a categoria</label>
                    <select onChange={(v) => setTag(v.target.value)} size={5} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg " name="" id="">
                        {categoriesToRender.map((category) => (
                            <option value={category.name}>{category.label}</option>
                        ))}
                    </select>
                    <label htmlFor="">Imagem da capa</label>
                    <input ref={imgRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="url" name="" id="" />
                    <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg hover:bg-lightBlue cursor-pointer duration-300" type="submit" onClick={handleSubmit} />
                </form>
            </main>
        </>
    )
}