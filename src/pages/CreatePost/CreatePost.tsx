import Header from "../../components/Header/Header"
import { categories } from "../../components/Categories/Categories"

export default function CreatePost(){

    const categoriesToRender = categories.filter((category) => category.name != 'all')

    return (
        <>
            <Header loggedIn={true} />
            <main className="p-12 flex flex-col items-center">
                <form className="flex flex-col gap-4 w-80 440:w-96" action="">
                    <label htmlFor="">Título da notícia</label>
                    <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="" id="" />
                    <label htmlFor="">Sua publicação</label>
                    <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg h-60" type="text" name="" id="" />
                    <label htmlFor="">Selecione a categoria</label>
                    <select size={5} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg " name="" id="">
                        {categoriesToRender.map((category) => (
                            <option value={category.name}>{category.label}</option>
                        ))}
                    </select>
                    <button className="border-1 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg hover:bg-lightBlue cursor-pointer duration-300">Publicar</button>
                </form>
            </main>
        </>
    )
}