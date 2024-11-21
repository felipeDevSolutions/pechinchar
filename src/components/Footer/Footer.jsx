import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Caça-Preço. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


export default Footer;