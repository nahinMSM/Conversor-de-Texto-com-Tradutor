import React from 'react';
import Logo from './../assets/logo-bandeira.png';

const Header: React.FC = () => (
  <header className="header">
    <img src={Logo} alt="Logo" />
    <h1>Wep <span> Conversor </span> de <span>Texto</span></h1>
  </header>
);

export default Header;