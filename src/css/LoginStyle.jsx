import styled from 'styled-components';

const primaryColor = '#1a1a1a';  
const accentColor = '#d4af37';   
const secondaryColor = '#f0f0f0';
const buttonColor = '#1f1f1f';
const buttonHoverColor = '#b8860b';

export const Container = styled.section`
  display: flex;
  margin-top:-100px;
  margin-bottom:-100px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo clara */
`;

export const LoginCard = styled.div`
  background-color: rgb(112, 112, 112);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 400px; /* Largura do card */
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${primaryColor};
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 94%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 99%;
  padding: 10px;
  background-color: ${primaryColor};
  color: ${accentColor};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${buttonHoverColor};
    color:${primaryColor};
  }
`;

export const Utilities = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;

  li {
    margin: 0.5rem 0;
  }

  .utility-text {
    color: ${accentColor};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${buttonHoverColor};
    }
  }
`;
