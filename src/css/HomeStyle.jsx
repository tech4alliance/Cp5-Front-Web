import styled from 'styled-components';

// Definindo paleta de cores e estilo de fontes
const primaryColor = '#1a1a1a';  // Preto elegante
const accentColor = '#d4af37';   // Dourado sofisticado
const secondaryColor = '#f0f0f0';  // Fundo claro
const buttonColor = '#1f1f1f';  // Cor dos botões
const buttonHoverColor = '#b8860b';  // Hover dos botões

// Container principal da página
export const MainContainer = styled.main`
  background-color: ${secondaryColor};
  padding: 2rem;
  color: ${primaryColor};
  font-family: 'Arial', sans-serif;
`;

// Estilização para o cabeçalho
export const Header = styled.header`
  background-color: ${primaryColor};
  color: ${accentColor};
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${accentColor};
  animation: fadeIn 1s ease-in;

  h1 {
    font-size: 3rem;
    letter-spacing: 3px;
    font-weight: 600;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Estilização da seção de boas-vindas
export const WelcomeSection = styled.section`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;

  h1 {
    font-size: 2rem;
    color: ${accentColor};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

// Seção de razão para escolher a empresa
export const ReasonSection = styled.section`
  background-color: ${secondaryColor};
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    color: ${primaryColor};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    line-height: 1.6;

    li {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '•';
        color: ${accentColor};
        position: absolute;
        left: 0;
        font-size: 1.5rem;
      }
    }
  }
`;

// Seção de missão
export const MissionSection = styled.section`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;

  h2 {
    color: ${accentColor};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

// Grid de produtos
export const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

// Item de produto
export const ProductItem = styled.section`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${accentColor};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: justify;
  }

  button {
    background-color: ${buttonColor};
    color: ${secondaryColor};
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${buttonHoverColor};
    }
  }
`;

// Estilização do SlideShow (ajuste de tamanho)
export const SlideShowContainer = styled.div`
  width: 100%;
  max-width: 800px; // Tamanho máximo do slideshow
  margin: 0 auto; // Centraliza o slideshow
  border-radius: 8px;
  overflow: hidden; // Corta bordas excessivas

  img {
    width: 100%;
    height: auto;
  }
`;
