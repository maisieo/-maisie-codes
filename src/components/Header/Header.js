import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav className="navigation">
        {/* Navigation links */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
