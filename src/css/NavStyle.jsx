import styled from 'styled-components';

// Cores elegantes
const primaryColor = '#1a1a1a'; // Preto elegante
const accentColor = '#d4af37'; // Dourado sofisticado
const linkHoverColor = '#f5f5f5'; // Cor de hover

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: ${primaryColor};
  padding: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Arial', sans-serif;

  a {
    color: ${accentColor};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
    padding: 0.5rem;

    &:hover {
      color: ${linkHoverColor};
      border-bottom: 2px solid ${accentColor};
    }

    &:active {
      color: ${linkHoverColor};
      border-bottom: 2px solid ${accentColor};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    a {
      font-size: 1rem;
    }
  }
`;
