import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const shine = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #111;
  color: #D4AF37;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #D4AF37;
  text-align: center;
  margin-bottom: 20px;
  animation: ${slideIn} 0.5s ease-out, ${shine} 5s linear infinite;
  background: linear-gradient(90deg, #D4AF37, #FFF, #D4AF37);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const TableHeader = styled.thead`
  background-color: #222;
`;

export const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: left;
  color: #D4AF37;
  font-weight: bold;
  border-bottom: 2px solid #D4AF37;
`;

export const TableRow = styled.tr`
  background-color: #222;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.02);
  }
`;

export const TableCell = styled.td`
  padding: 15px;
  color: #FFF;
  border-top: 1px solid #D4AF37;
  border-bottom: 1px solid #D4AF37;

  &:first-child {
    border-left: 1px solid #D4AF37;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-right: 1px solid #D4AF37;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const buttonStyles = css`
  background: linear-gradient(45deg, #D4AF37, #FFD700);
  border: none;
  color: #000;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    background: linear-gradient(45deg, #FFD700, #D4AF37);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const Button = styled.button`
  ${buttonStyles}

  &.edit {
    background: linear-gradient(45deg, #4CAF50, #45a049);
    &:hover {
      background: linear-gradient(45deg, #45a049, #4CAF50);
    }
  }

  &.delete {
    background: linear-gradient(45deg, #f44336, #d32f2f);
    &:hover {
      background: linear-gradient(45deg, #d32f2f, #f44336);
    }
  }
`;

export const Logoutbtn = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(45deg, #f44336, #d32f2f);
  
  &:hover {
    background: linear-gradient(45deg, #d32f2f, #f44336);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);
  animation: ${slideIn} 0.5s ease-in-out;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #D4AF37;
  border-radius: 25px;
  background-color: #333;
  color: #FFF;
  transition: all 0.3s;

  &:focus {
    border-color: #FFD700;
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`;

export const AnimatedTableRow = styled(TableRow)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  display: block;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: #222;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  animation: ${slideIn} 0.3s ease-in-out;
  border: 2px solid #D4AF37;
  color: #FFF;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #D4AF37;
  transition: all 0.3s;

  &:hover {
    color: #FFD700;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
  }
`;