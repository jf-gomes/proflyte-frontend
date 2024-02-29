import Header from "../../components/Header/Header"

export default function CreatePost(){
    return (
        <>
            <Header loggedIn={true} />
            <main className="p-12 flex flex-col items-center">
                <form className="flex flex-col" action="">
                    <label htmlFor="">Título da notícia</label>
                    <input className="border-1 border-black shadow-lg max-w-3xl" type="text" name="" id="" />
                    <label htmlFor="">Sua publicação</label>
                    <input className="border-1 border-black shadow-lg max-w-3xl h-60" type="text" name="" id="" />
                    <select name="" id="">
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Tecnologia">Administração</option>
                    </select>
                </form>
            </main>
        </>
    )
}