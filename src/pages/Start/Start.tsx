import SignUpForm from "../../components/SignUpForm/SignUpForm"
import SignUpImg from '../../assets/signUpImg.png'
import LoginForm from "../../components/LoginForm/LoginForm"
import { useAppSelector } from "../../hooks/hooks"
import { useDispatch } from "react-redux"
import { setFalse, setTrue } from "../../features/hasAccount/hasAccount.slice"

export default function Start(){

    const hasAccount = useAppSelector((state) => state.changeHasAccount.value)
    const dispatch = useDispatch()

    function changeHasAccount(to: boolean): void{
        to == false ? dispatch(setFalse()) : dispatch(setTrue())
    }

    return (
        <main className="flex justify-center items-center h-screen flex-wrap gap-6">
            <div>
                <img className="440:w-96 w-80" src={SignUpImg} alt="Proflyte" />
            </div>
            {hasAccount ? <LoginForm changeHasAccount={() => changeHasAccount(false)} /> : <SignUpForm changeHasAccount={() => changeHasAccount(true)} />}
        </main>
    )
}