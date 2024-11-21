import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProdutoById } from '../../services/api';
import ProductDetails from '../../components/ProductList/ProductDetails';


const Product = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);


  useEffect(() => {
    const fetchProduto = async () => {
      const data = await getProdutoById(id);
      setProduto(data);
    };


    fetchProduto();
  }, [id]);


  if (!produto) {
    return <div>Carregando...</div>;
  }


  return (
    <div>
      {/* Use o componente ProductDetails para exibir os detalhes */}
       <ProductDetails produto={produto}/>
    </div>
  );
};


export default Product;