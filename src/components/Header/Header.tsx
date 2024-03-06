import logoWhite from '../../assets/logoWhite.png'
import { FiUser } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

export default function Header(){

    const navigate = useNavigate()

    const isLoggedIn = useAppSelector((state) => state.changeIsLoggedIn.value)
    const userData = useAppSelector((state) => state.changeUserData.data)

    if (isLoggedIn){
        return (
            <header className="bg-darkBlue p-6 flex justify-between items-center">
                <div className='flex items-center'>
                    <img className='w-36' src={logoWhite} alt="Proflyte" />
                    <p className='text-white'>Olá, {userData?.userName}</p>
                </div>
                <nav className='text-white'>
                    <ul className='flex gap-6'>
                        <li className='flex gap-2 items-center hover:underline cursor-pointer' onClick={() => navigate('/home')}><FiHome />Home</li>
                        <li className='flex gap-2 items-center hover:underline cursor-pointer' onClick={() => navigate('/me')}><FiUser />Meu perfil</li>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return (
            <header className="bg-darkBlue p-6 flex justify-between items-center">
                <img className='w-36' src={logoWhite} alt="Proflyte" />
                <nav className='text-white'>
                    <ul className='flex gap-6'>
                        <li className='flex gap-2 items-center hover:underline cursor-pointer' onClick={() => navigate('/')}><CiLogin />Entre ou crie sua conta</li>
                    </ul>
                </nav>
            </header>
        )
    }
}