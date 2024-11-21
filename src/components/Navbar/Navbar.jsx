import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o arquivo CSS para estilização
import logo from '../../static/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/"> {/* Link para a página inicial */}
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Imagem do logo */}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre-nos" className="nav-links">
              Sobre Nós
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ofertas" className="nav-links">
              Ofertas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cadastrar" className="nav-links">
              Cadastrar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;