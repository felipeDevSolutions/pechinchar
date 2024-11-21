import React, { useState, useEffect } from 'react';
import { getProdutos } from '../../services/api';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css'


const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const data = await getProdutos();
      setProdutos(data);
      setProdutosFiltrados(data); // Inicialmente, exibe todos os produtos
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    // Filtra os produtos sempre que o termo de busca mudar
    const filtraProdutos = () => {
      const resultadoFiltro = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
      );
      setProdutosFiltrados(resultadoFiltro);
    };

    filtraProdutos();
  }, [termoBusca, produtos]); // Adicione produtos como dependência


  const handleBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <h1>Busca de Produtos</h1>
        <div className='search-container-field'>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={termoBusca}
            onChange={handleBuscaChange}
          />

          {/* Adicione um botão de busca (opcional) */}
          <button onClick={() => {/* Lógica de busca mais específica (opcional) */}}>
            Buscar
          </button>
        </div>


      </div>
      <ProductList produtos={produtosFiltrados} />

    </div>
  );
};

export default Home;