import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ produtos }) => {
  return (
    <ul>
      {produtos.map(produto => (
        <li key={produto.id}>
          <Link to={`/product/${produto.id}`}>
            {produto.nome} - R$ {produto.preco}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;