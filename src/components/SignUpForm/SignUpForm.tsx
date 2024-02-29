type SignUpFormProps = {
    changeHasAccount: () => void
}

export default function SignUpForm({ changeHasAccount }: SignUpFormProps){

    return (
        <div className="flex flex-col gap-6 w-96">
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-blue">Crie sua conta</h1>
            <p className="440:text-left text-center text-grey">E fique por dentro das últimas novidades no mundo profissional!</p>
        </div>
        <form className="flex flex-col items-center 440:align-left gap-6" action="">
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="name" id="name" placeholder="Seu nome" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="e-mail" id="e-mail" placeholder="Seu e-mail" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="password" id="password" placeholder="Sua senha" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 shadow-lg" type="text" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirme a sua senha" />
            <input className="border-1 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg hover:bg-lightBlue cursor-pointer duration-300" type="submit" value="Criar conta" />
            <p className="text-center">ou</p>
            <input className="border-2 border-black rounded-xl w-80 440:w-96 p-2 bg-blue text-white min-w-72 shadow-lg" type="submit" value="Entrar com o Google" />
            <p className="text-center">Já tem uma conta? <span className="font-bold text-blue hover:underline cursor-pointer" onClick={changeHasAccount}>Entrar!</span></p>
        </form>
    </div>
    )
}