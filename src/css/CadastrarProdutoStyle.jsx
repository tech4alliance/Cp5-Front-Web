import styled from 'styled-components';

const primaryColor = '#1a1a1a';  
const accentColor = '#d4af37';   
const secondaryColor = '#f0f0f0';
const buttonColor = '#1f1f1f';
const buttonHoverColor = '#b8860b';

export const Title = styled.h1`
  text-align: center;
  color: ${primaryColor};
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 70%;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

export const TableHeader = styled.tr`
  background-color: #f8f8f8;
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #ccc;
  color: #555;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: rgb(210, 176, 255,0.3); 
  }
`;

export const TableCell = styled.td`
  padding: 0.9rem;
  border-bottom: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: ${buttonColor};
  color: ${accentColor};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${buttonHoverColor}; /* Cor ao passar o mouse */
    color: ${secondaryColor}
  }
`;