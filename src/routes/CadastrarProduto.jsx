import { useNavigate } from 'react-router-dom';
import {
    Title,
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableCell,
    Button,
    Logoutbtn
  } from '../css/CadastrarProdutoStyle';

const CadastrarProduto=()=>{

    const navigate = useNavigate();

    const handleLogout=()=>{
      sessionStorage.removeItem('senha');
      sessionStorage.removeItem('usuario');
      alert("Saindo...")
      navigate("/")
    }

    return(
        <>
        <Logoutbtn onClick={handleLogout}>Sair</Logoutbtn>
        <Title>Cadastrar Produtos</Title>
      <Table>
        <TableHeader>
          <TableHeaderCell>Carro</TableHeaderCell>
          <TableHeaderCell>Preço</TableHeaderCell>
          <TableHeaderCell>Fabricante</TableHeaderCell>
          <TableHeaderCell>Ação</TableHeaderCell>
        </TableHeader>
        {[...Array(10)].map((index) => (
          <TableRow key={index}>
            <TableCell>BMW i8</TableCell>
            <TableCell>800.000,00</TableCell>
            <TableCell>BMW</TableCell>
            <TableCell>
              <Button>Cadastrar Carro</Button>
            </TableCell>
          </TableRow>
        ))}
      </Table>
        </>
    )
}

export default CadastrarProduto