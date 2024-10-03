import { Navbar } from '../css/NavStyle';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/sobre">Sobre</Link>
    </Navbar>
  );
};

export default Nav;
