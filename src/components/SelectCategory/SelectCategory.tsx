interface SelectCategoryProps{
    category: string
    setCategory: (category: string) => void
}

export default function SelectCategory({ category, setCategory }: SelectCategoryProps){
    return (
        <nav>
            <ul className="flex gap-6 flex-wrap text-grey">
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('all')}>Tudo</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('technology')}>Tecnologia</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('engineering')}>Engenharia</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('business')}>Gestão e Negócios</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('environment')}>Meio ambiente</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('marketing')}>Marketing</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('journalism')}>Jornalismo</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('architecture')}>Arquitetura</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('education')}>Educação</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('health')}>Saúde</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('industry')}>Indústria</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('design')}>Design</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('graphic computing')}>Computação Gráfica</li>
                <li className="hover:underline cursor-pointer" onClick={() => setCategory('public management')}>Administração Pública</li>
            </ul>
        </nav>
    )
}