// SobreNos.jsx
import React from 'react';
import './SobreNos.css';

// Importe as imagens dos desenvolvedores
import dev1 from '../../static/dev1.png';
import dev2 from '../../static/dev2.png';
import dev3 from '../../static/dev3.png';
import dev4 from '../../static/dev4.png';
import dev5 from '../../static/dev5.png';


// Importe as imagens dos parceiros
import parceiro1 from '../../static/parceiro1.png';
import parceiro2 from '../../static/parceiro2.png';
import parceiro3 from '../../static/parceiro3.png';
import parceiro4 from '../../static/parceiro4.png';
import parceiro5 from '../../static/parceiro5.png';
import parceiro6 from '../../static/parceiro6.png';
import parceiro7 from '../../static/parceiro7.png';
import parceiro8 from '../../static/parceiro8.png';
import parceiro9 from '../../static/parceiro9.png';
import parceiro10 from '../../static/parceiro10.png';



const SobreNos = () => {
  const desenvolvedores = [
    { nome: 'Desenvolvedor 1', foto: dev1, descricao: 'Descrição do Desenvolvedor 1. Habilidades e experiência.' },
    { nome: 'Desenvolvedor 2', foto: dev2, descricao: 'Descrição do Desenvolvedor 2. Habilidades e experiência.' },
    { nome: 'Desenvolvedor 3', foto: dev3, descricao: 'Descrição do Desenvolvedor 3. Habilidades e experiência.' },
    { nome: 'Desenvolvedor 4', foto: dev4, descricao: 'Descrição do Desenvolvedor 4. Habilidades e experiência.' },
    { nome: 'Desenvolvedor 5', foto: dev5, descricao: 'Descrição do Desenvolvedor 5. Habilidades e experiência.' },
  ];

  const parceiros = [
    parceiro1, parceiro2, parceiro3, parceiro4, parceiro5,
    parceiro6, parceiro7, parceiro8, parceiro9, parceiro10,
  ];

  return (
    <div className="sobre-nos-container">

      <section className="section-sobre">
        <h2>Sobre o Caça-Preço</h2>
        <p>
          O Caça-Preço é uma plataforma online gratuita e inovadora projetada para ajudar você a economizar dinheiro em suas compras diárias. 
          Desenvolvido especificamente para moradores da Região Metropolitana de Fortaleza, centralizamos e comparamos preços de uma ampla variedade de produtos e serviços, 
          desde alimentos e combustíveis até medicamentos e serviços automotivos.
        </p>
        <p>
          Com uma interface intuitiva e fácil de usar, o Caça-Preço permite que você pesquise produtos, compare preços em diferentes estabelecimentos, 
          defina alertas de preços para ser notificado sobre promoções e crie listas de compras personalizadas. 
          Acreditamos que a informação é a chave para um consumo consciente e inteligente. 
          Por isso, oferecemos recursos como histórico de preços e uma comunidade ativa onde os usuários podem compartilhar dicas e ofertas, 
          promovendo a economia colaborativa e a sustentabilidade.
        </p>

        <p>
            Junte-se à comunidade Caça-Preço e comece a economizar hoje mesmo!
        </p>
      </section>

      <section className="section-desenvolvedores">
        <h2>Desenvolvedores</h2>
        <div className="desenvolvedores-container">
          {desenvolvedores.map((dev, index) => (
            <div className="desenvolvedor" key={index}>
              <img src={dev.foto} alt={dev.nome} className="dev-foto" />
              <h3>{dev.nome}</h3>
              <p>{dev.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-parceiros">
        <h2>Parceiros</h2>
        <div className="parceiros-logos">
          {parceiros.map((logo, index) => (
            <img src={logo} alt={`Parceiro ${index + 1}`} key={index} className="parceiro-logo" />
          ))}
        </div>
      </section>

    </div>
  );
};

export default SobreNos;