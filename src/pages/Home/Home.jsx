import React, { useState, useEffect } from 'react';
import { getProdutos, getSupermercados } from '../../services/api';
import ProductList from '../../components/ProductList/ProductList';
import './Home.css';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  const [produtosPorSupermercado, setProdutosPorSupermercado] = useState({});
  const [supermercados, setSupermercados] = useState({});
  const [executarBusca, setExecutarBusca] = useState(false);

  useEffect(() => {
    const fetchSupermercados = async () => {
      const data = await getSupermercados();
      setSupermercados(data);
    };
    fetchSupermercados();
  }, []);

  useEffect(() => {
    const fetchProdutos = async () => {
      const data = await getProdutos();
      setProdutos(data);
    };
    fetchProdutos();
  }, []);

  useEffect(() => {
    if (executarBusca) { // Só executa a filtragem se executarBusca for true
      const filtraProdutos = () => {
        if (termoBusca.trim() === "") {
          setProdutosPorSupermercado({});
          return;
        }

        const resultadoFiltro = produtos.filter(produto =>
          produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
        );

        const supermercadoProdutos = {};
        resultadoFiltro.forEach(produto => {
          const supermercadoId = produto.supermercado;
          if (!supermercadoProdutos[supermercadoId]) {
            supermercadoProdutos[supermercadoId] = [];
          }
          supermercadoProdutos[supermercadoId].push(produto);
        });
        setProdutosPorSupermercado(supermercadoProdutos);
      };
      filtraProdutos();
      setExecutarBusca(false); // Volta para false após a busca
    }
  }, [executarBusca, termoBusca, produtos]);

  const handleBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setExecutarBusca(true);
    }
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
            onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown
          />
          <button>Buscar</button>
        </div>
      </div>
      {Object.keys(produtosPorSupermercado).length > 0 ? (
        <ProductList produtosPorSupermercado={produtosPorSupermercado} supermercados={supermercados} />
      ) : (
        <div className="no-results">
          <p>Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
};

export default Home;