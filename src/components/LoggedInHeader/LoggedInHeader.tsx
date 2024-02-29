import logoWhite from '../../assets/logoWhite.png'
import { FiUser } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

export default function LoggedInHeader(){
    return (
        <header className="bg-darkBlue p-6 flex justify-between items-center">
            <img className='w-36' src={logoWhite} alt="Proflyte" />
            <nav className='text-white'>
                <ul className='flex gap-6'>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer'><FiHome />Home</li>
                    <li className='flex gap-2 items-center hover:underline cursor-pointer'><FiUser />Meu perfil</li>
                </ul>
            </nav>
        </header>
    )
}