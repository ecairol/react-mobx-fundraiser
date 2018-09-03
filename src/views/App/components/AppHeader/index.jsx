import React from 'react';
import logo from './logo.png';

import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-header__logo" alt="Crypto Fund" />
      <h1 className="app-title">Crypto Fund</h1>
      <nav className="app-header__nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submit">Submit Project</Link></li>
        <li><Link to="/about">About</Link></li>
      </nav>
    </header>
  )
}
export default AppHeader;