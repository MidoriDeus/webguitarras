import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onCartClick, cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <h2 className="text-gradient">RiffMaster</h2>
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/" className="nav-link">Inicio</Link>

                {/* Desktop dropdown menu */}
                <div className="dropdown">
                    <a href="#guitars" className="nav-link dropdown-toggle">Guitarras</a>
                    <div className="dropdown-menu">
                        <Link to="/electric" className="dropdown-item">Eléctricas</Link>
                        <Link to="/acoustic" className="dropdown-item">Acústicas</Link>
                        <Link to="/electro-acoustic" className="dropdown-item">Electroacústicas</Link>
                    </div>
                </div>

                <Link to="#about" className="nav-link">Nosotros</Link>
            </nav>

            {/* Mobile menu button */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
                <span>☰</span>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="nav-link mobile-nav-link" onClick={toggleMenu}>Inicio</Link>
                    <div className="mobile-dropdown">
                        <div className="mobile-dropdown-header" onClick={(e) => {
                            e.stopPropagation();
                            document.querySelector('.mobile-submenu').classList.toggle('open');
                        }}>
                            Guitarras
                        </div>
                        <div className="mobile-submenu">
                            <Link to="/electric" className="dropdown-item mobile-dropdown-item" onClick={toggleMenu}>Eléctricas</Link>
                            <Link to="/acoustic" className="dropdown-item mobile-dropdown-item" onClick={toggleMenu}>Acústicas</Link>
                            <Link to="/electro-acoustic" className="dropdown-item mobile-dropdown-item" onClick={toggleMenu}>Electroacústicas</Link>
                        </div>
                    </div>
                    <Link to="#about" className="nav-link mobile-nav-link" onClick={toggleMenu}>Nosotros</Link>
                </div>
            )}

            <div className="cart-icon" onClick={onCartClick}>
                <span style={{ fontSize: '1.5rem' }}>🛒</span>
                {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
            </div>
        </header>
    );
};

export default Header;
