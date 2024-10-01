const Login=()=>{

    const handleSubmit=(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();

        if(validade()){

            let token=
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha",token)
                navigate("/cadastrarprodutos")

        }else{
                alert("usuario/senha inválidos")
        }

     }
    return(
        <>
        <h1>Login</h1>
        </>
    )
}

export default Login 