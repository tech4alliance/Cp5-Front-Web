import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  LoginCard, 
  Title, 
  InputContainer, 
  Input, 
  Button, 
  Utilities 
} from '../css/LoginStyle'; 

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const validade = () => {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validade()) {
      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem("usuario", usuario.current.value);
      sessionStorage.setItem("senha", token);
      navigate("/cadastrarprodutos");
      alert("Login Efetuado!");
    } else {
      alert("Usuário/Senha inválidos");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/usuarios/")
      .then((res) => res.json())
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <Container>
      <LoginCard>
        <Title>Logue no Site!</Title>
        <form className="login-form" onSubmit={handleSubmit}>
          <InputContainer>
            <Input type="text" placeholder="Usuário" ref={usuario} />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Senha" ref={senha} />
          </InputContainer>
          <Button type="submit">Login</Button>
        </form>
        <Utilities>
          <li className="utility-text">Esqueceu a senha?</li>
          <li className="utility-text">Criar Conta</li>
        </Utilities>
      </LoginCard>
    </Container>
  );
};

export default Login;
