import React from 'react';

const ProductDetails = ({ produto }) => { // Recebe o produto como prop
  if (!produto) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto o produto não é carregado.
  }


  return (
    <div>
      {/* Exibe os detalhes do produto */}
      <h2>{produto.nome}</h2>
      <p>Descrição: {produto.descricao || "Sem descrição"}</p>
      <p>Preço: R$ {produto.preco}</p>
      <p>Estabelecimento: {produto.estabelecimento || "Não informado"}</p>
        {/* Exibir outras informações do produto, como imagem, etc. */}
    </div>
  );
};


export default ProductDetails;