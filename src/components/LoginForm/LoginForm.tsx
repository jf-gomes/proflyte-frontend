import { useRef } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

type LoginFormProps = {
    changeHasAccount: () => void
}

export default function LoginForm({ changeHasAccount }: LoginFormProps): JSX.Element{

    const navigate = useNavigate()

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(e: React.FormEvent<HTMLInputElement>){
        e.preventDefault()
        const response = await api.post('/users/login', {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        })
        response.status == 200 && navigate('/home')
    }

    return (
        <div className="flex flex-col gap-6 w-96">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-3xl font-bold text-blue">Entrar</h1>
            </div>
            <form className="flex flex-col items-center 440:align-left gap-6" action="">
            <input ref={emailRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="e-mail" id="e-mail" placeholder="Seu e-mail" />
            <input ref={passwordRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="password" name="password" id="password" placeholder="Sua senha" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg hover:bg-lightBlue cursor-pointer duration-300" type="submit" value="Entrar" onClick={handleSubmit} />
            <p className="text-center">ou</p>
            <input className="border-2 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg" type="submit" value="Entrar com o Google" />
            <p className="text-center">Ainda não possui uma conta? <span className="font-bold text-blue hover:underline cursor-pointer" onClick={changeHasAccount}>Cadastre-se!</span></p>
            </form>
        </div>
    )
}