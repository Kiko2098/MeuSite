import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li className="NavBar-item"><Link to="/">INICIO</Link></li>
        <li className="NavBar-item"><Link to="/about-me">SOBRE MIM</Link></li>
        <li className="NavBar-item"><Link to="/projects">PROJETOS</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
