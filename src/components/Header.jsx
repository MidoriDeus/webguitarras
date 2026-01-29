import React from 'react';

const Header = ({ onCartClick, cartCount }) => {
    return (
        <header className="header">
            <div className="logo">
                <h2 className="text-gradient">RiffMaster</h2>
            </div>
            <nav className="nav-links">
                <a href="#home" className="nav-link">Inicio</a>
                <a href="#guitars" className="nav-link">Guitarras</a>
                <a href="#about" className="nav-link">Nosotros</a>
            </nav>
            <div className="cart-icon" onClick={onCartClick}>
                <span style={{ fontSize: '1.5rem' }}>🛒</span>
                {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
            </div>
        </header>
    );
};

export default Header;
