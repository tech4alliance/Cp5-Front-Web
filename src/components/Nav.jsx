import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        </>
    )
}
export default Nav