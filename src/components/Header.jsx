import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="logo-text">Atlas Community</Link>
      </div>
      <nav className="header-nav">
        <Link to="/">Anasayfa</Link>
        <Link to="/hakkımızda">Hakkımızda</Link>
        <Link to="/mta-indir">MTA İndir</Link>
      </nav>
    </header>
  );
}

export default Header;
