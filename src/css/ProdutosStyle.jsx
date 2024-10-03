import styled from "styled-components";

const primaryColor = '#1a1a1a';  
const accentColor = '#d4af37';   
const secondaryColor = '#f0f0f0';
const buttonColor = '#1f1f1f';
const buttonHoverColor = '#b8860b';

export const Title = styled.h1`
    padding: 1rem;
    color: ${primaryColor};
    font-family: 'Arial', sans-serif;
    display:flex;
    justify-content: center;
`

export const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

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
    height: 500px;
  }

  #produto-2{
    height: 518px;
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