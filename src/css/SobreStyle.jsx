import styled from 'styled-components';

const primaryColor = '#1a1a1a';
const secondaryColor = '#f5f5f5';
const accentColor = '#d4af37';
const textColor = '#333';
const headingColor = '#000';

export const SobreNos = styled.header`
  background-color: ${primaryColor};
  color: ${accentColor};
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${accentColor};
  animation: fadeIn 1s ease-in;
  font-family: 'Arial', sans-serif;

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

export const Imagem = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    max-width: 50%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      max-width: 70%;
    }
  }
`;

export const Textos = styled.section`
  padding: 0 2rem;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'Helvetica Neue', sans-serif;
  color: ${textColor};

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${textColor};
  }

  .historia, .compromisso {
    color: ${headingColor};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    border-bottom: 2px solid ${accentColor};
    padding-bottom: 0.5rem;
  }
`;

export const Diferenca = styled.section`
  background-color: ${secondaryColor};
  padding: 2rem 0;
  margin: 4rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  nav ul {
    list-style-type: none;
    padding: 0;
    max-width: 900px;
    margin: 0 auto;

    li {
      background-color: ${primaryColor};
      color: ${secondaryColor};
      padding: 1.5rem;
      margin: 1rem 0;
      border-radius: 12px;
      font-size: 1.2rem;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${accentColor};
        color: ${primaryColor};
      }
    }
  }
`;

export const Textos2 = styled.section`
  padding: 0 2rem;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.8;

  h2 {
    color: ${headingColor};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    border-bottom: 2px solid ${accentColor};
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${textColor};
  }
`;

export const Equipe = styled.section`
  background-color: ${primaryColor};
  padding: 3rem 0;
  color: ${secondaryColor};
  border-top: 1px solid ${accentColor};

  h2 {
    text-align: center;
    color: ${accentColor};
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;

    li {
      background-color: ${secondaryColor};
      color: ${primaryColor};
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: 500;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${accentColor};
        color: ${primaryColor};
      }
    }
  }

  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
