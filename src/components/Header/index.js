import React from 'react';

// import { Container } from './styles';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{background: 'rgb(202, 202, 202)'}}>
    <a className="navbar-brand" href="index.html"><h1 style={{fontFamily: 'sans-serif'}} >Lar</h1></a>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
            <a className="nav-link" style={{cursor: 'pointer'}} href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Reunião
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="pages/reunioes/caboco.html">Caboco</a>
              <a className="dropdown-item" href="pages/reunioes/criancas.html">Crianças</a>
              <a className="dropdown-item" href="pages/reunioes/estudos.html">Estudos</a>
              <a className="dropdown-item" href="pages/reunioes/exu.html">Exú</a>
              <a className="dropdown-item" href="pages/reunioes/pretovelho.html">Preto Velho</a>
              <a className="dropdown-item" href="pages/reunioes/tratamento.html">Tratamento</a>
            </div>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="horarios.html">Horarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">?</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;