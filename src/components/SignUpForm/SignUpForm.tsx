import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useRef } from "react"

type SignUpFormProps = {
    changeHasAccount: () => void
}

export default function SignUpForm({ changeHasAccount }: SignUpFormProps){

    const navigate = useNavigate()

    const nameRef = useRef<HTMLInputElement>(null)
    const userNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmationRef = useRef<HTMLInputElement>(null)

    async function handleSubmit(e: React.FormEvent<HTMLInputElement>): Promise<void>{
        e.preventDefault()
        if (!nameRef.current?.value || !userNameRef.current?.value || !emailRef.current?.value || !passwordRef.current?.value || !passwordConfirmationRef.current?.value){
            alert('Preencha todos os dados')
        } else if (passwordRef.current?.value != passwordConfirmationRef.current?.value) {
            alert('As senhas não conferem.')
        } else {
            const response = await api.post('/users/newuser', {
                name: nameRef.current?.value,
                userName: userNameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            })
            response.status == 201 && handleLogin()
        }
    }

    async function handleLogin(): Promise<void>{
        const response = await api.post('/users/login', {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        })
        response.status == 200 && navigate('/home')
    }

    return (
        <div className="flex flex-col gap-6 w-96">
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-blue">Crie sua conta</h1>
            <p className="440:text-left text-center text-grey">E fique por dentro das últimas novidades no mundo profissional!</p>
        </div>
        <form className="flex flex-col items-center 440:align-left gap-6" action="">
            <input ref={nameRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="name" id="name" placeholder="Seu nome" />
            <input ref={userNameRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="name" id="name" placeholder="Seu apelido (como aparecerá no seu perfil)" />
            <input ref={emailRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="e-mail" id="e-mail" placeholder="Seu e-mail" />
            <input ref={passwordRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="password" name="password" id="password" placeholder="Sua senha" />
            <input ref={passwordConfirmationRef} className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirme a sua senha" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg hover:bg-lightBlue cursor-pointer duration-300" type="submit" value="Criar conta" onClick={handleSubmit} />
            <p className="text-center">ou</p>
            <input className="border-2 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg" type="submit" value="Entrar com o Google" />
            <p className="text-center">Já tem uma conta? <span className="font-bold text-blue hover:underline cursor-pointer" onClick={changeHasAccount}>Entrar!</span></p>
        </form>
    </div>
    )
}