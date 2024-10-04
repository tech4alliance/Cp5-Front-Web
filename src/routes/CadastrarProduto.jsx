import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  Button,
  Logoutbtn,
  Form,
  Input,
  AnimatedTableRow,
  SearchInput,
  Modal,
  ModalContent,
  ModalButtons,
  SortButton
} from '../css/CadastrarProdutoStyle';

const CadastrarProduto = () => {
  const navigate = useNavigate();
  const [carros, setCarros] = useState([]);
  const [novoCarro, setNovoCarro] = useState({ id: null, nome: '', preco: '', fabricante: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [showModal, setShowModal] = useState(false);
  const [carroToDelete, setCarroToDelete] = useState(null);

  useEffect(() => {
    const savedCarros = JSON.parse(localStorage.getItem('carros') || '[]');
    setCarros(savedCarros);
  }, []);

  useEffect(() => {
    localStorage.setItem('carros', JSON.stringify(carros));
  }, [carros]);

  const handleLogout = () => {
    sessionStorage.removeItem('senha');
    sessionStorage.removeItem('usuario');
    alert("Saindo...");
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCarro(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setCarros(carros.map(carro => carro.id === editingId ? { ...novoCarro, id: editingId } : carro));
      setEditingId(null);
    } else {
      setCarros(prev => [...prev, { ...novoCarro, id: Date.now() }]);
    }
    setNovoCarro({ id: null, nome: '', preco: '', fabricante: '' });
  };

  const handleEdit = (carro) => {
    setNovoCarro(carro);
    setEditingId(carro.id);
  };

  const handleDelete = (carro) => {
    setCarroToDelete(carro);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setCarros(carros.filter(c => c.id !== carroToDelete.id));
    setShowModal(false);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedCarros = React.useMemo(() => {
    let sortableCarros = [...carros];
    if (sortConfig.key !== null) {
      sortableCarros.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCarros;
  }, [carros, sortConfig]);

  const filteredCarros = sortedCarros.filter(carro =>
    carro.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    carro.fabricante.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container className="luxury-theme">
      <Logoutbtn onClick={handleLogout}>Sair</Logoutbtn>
      <Title>Cadastro de Produtos</Title>
      <Form onSubmit={handleSubmit} className="luxury-form">
        <Input
          name="nome"
          value={novoCarro.nome}
          onChange={handleInputChange}
          placeholder="Nome do Veículo"
          required
          className="luxury-input"
        />
        <Input
          name="preco"
          value={novoCarro.preco}
          onChange={handleInputChange}
          placeholder="Preço"
          type="number"
          required
          className="luxury-input"
        />
        <Input
          name="fabricante"
          value={novoCarro.fabricante}
          onChange={handleInputChange}
          placeholder="Fabricante"
          required
          className="luxury-input"
        />
        <Button type="submit" className="luxury-button">
          {editingId !== null ? 'Atualizar' : 'Adicionar'} Veículo
        </Button>
      </Form>
      <SearchInput
        type="text"
        placeholder="Pesquisar veículos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="luxury-search"
      />
      <Table className="luxury-table">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <SortButton onClick={() => handleSort('nome')} className="luxury-sort-button">
                Veículo {sortConfig.key === 'nome' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </SortButton>
            </TableHeaderCell>
            <TableHeaderCell>
              <SortButton onClick={() => handleSort('preco')} className="luxury-sort-button">
                Preço {sortConfig.key === 'preco' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </SortButton>
            </TableHeaderCell>
            <TableHeaderCell>
              <SortButton onClick={() => handleSort('fabricante')} className="luxury-sort-button">
                Fabricante {sortConfig.key === 'fabricante' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </SortButton>
            </TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {filteredCarros.map((carro) => (
            <AnimatedTableRow key={carro.id}>
              <TableCell>{carro.nome}</TableCell>
              <TableCell>{carro.preco}</TableCell>
              <TableCell>{carro.fabricante}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(carro)} className="luxury-button edit">Editar</Button>
                <Button onClick={() => handleDelete(carro)} className="luxury-button delete">Excluir</Button>
              </TableCell>
            </AnimatedTableRow>
          ))}
        </tbody>
      </Table>
      {showModal && (
        <Modal>
          <ModalContent className="luxury-modal">
            <p>Tem certeza que deseja excluir o veículo {carroToDelete.nome}?</p>
            <ModalButtons>
              <Button onClick={confirmDelete} className="luxury-button">Sim</Button>
              <Button onClick={() => setShowModal(false)} className="luxury-button">Não</Button>
            </ModalButtons>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default CadastrarProduto;