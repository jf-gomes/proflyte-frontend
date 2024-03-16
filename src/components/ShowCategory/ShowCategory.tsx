import { categories } from "../Categories/Categories"

interface ShowCategoryProps{
    category: string
    setCategory: (category: string) => void
}

export default function ShowCategory({ setCategory }: ShowCategoryProps){
    return (
        <nav>
            <ul className="flex gap-6 flex-wrap text-grey">
                {categories.map((category) => (
                    <li key={category.id} className="hover:underline cursor-pointer" onClick={() => setCategory(category.name)}>{category.label}</li>
                ))}
            </ul>
        </nav>
    )
}