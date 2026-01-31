import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onCartClick, cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGuitarOpen, setIsGuitarOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setIsGuitarOpen(false); // Close guitar submenu when opening main menu
        }
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menuButton = document.querySelector('.mobile-menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const guitarDropdown = document.querySelector('.nav-dropdown');
            const guitarButton = document.querySelector('.dropdown-toggle');

            // Check if click is outside mobile menu
            if (isMenuOpen &&
                menuButton &&
                !menuButton.contains(event.target) &&
                mobileMenu &&
                !mobileMenu.contains(event.target)) {
                setIsMenuOpen(false);
                setIsGuitarOpen(false);
            }

            // Check if click is outside guitar dropdown
            if (isGuitarOpen &&
                guitarDropdown &&
                !guitarDropdown.contains(event.target) &&
                !guitarButton?.contains(event.target)) {
                setIsGuitarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, isGuitarOpen]);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" className="logo-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>
                        <h2 className="text-gradient">RiffMaster</h2>
                    </Link>
                </div>

                <nav className="navbar-links">
                    <Link to="/" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>
                        <span className="nav-link-text">Inicio</span>
                    </Link>

                    {/* Desktop dropdown menu */}
                    <div className={`nav-dropdown ${isGuitarOpen ? 'active' : ''}`}>
                        <button
                            className="nav-link dropdown-toggle"
                            onClick={() => setIsGuitarOpen(prev => !prev)}
                            aria-expanded={isGuitarOpen}
                            aria-haspopup="true"
                        >
                            <span className="nav-link-text">Guitarras</span>
                        </button>

                        {isGuitarOpen && (
                            <div className="dropdown-menu" role="menu">
                                <Link to="/electric" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                    <span className="dropdown-item-text">Eléctricas</span>
                                </Link>
                                <Link to="/acoustic" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                    <span className="dropdown-item-text">Acústicas</span>
                                </Link>
                                <Link to="/electro-acoustic" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                    <span className="dropdown-item-text">Electroacústicas</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/nosotros" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>
                        <span className="nav-link-text">Nosotros</span>
                    </Link>
                </nav>

                {/* Mobile menu toggle button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                {/* Cart icon */}
                <div className="cart-wrapper">
                    <button className="cart-icon" onClick={onCartClick} aria-label="Carrito de compras">
                        <span className="cart-icon-text">🛒</span>
                        {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link mobile-nav-link" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>
                    <span className="nav-link-text">Inicio</span>
                </Link>

                <div className="mobile-dropdown">
                    <div className="mobile-dropdown-header" onClick={() => setIsGuitarOpen(prev => !prev)}>
                        <span className="mobile-dropdown-text">Guitarras</span>
                        <span className="dropdown-arrow">{isGuitarOpen ? '▲' : '▼'}</span>
                    </div>

                    <div className={`mobile-submenu ${isGuitarOpen ? 'expanded' : ''}`}>
                        <Link to="/electric" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>
                            <span className="dropdown-item-text">Eléctricas</span>
                        </Link>
                        <Link to="/acoustic" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>
                            <span className="dropdown-item-text">Acústicas</span>
                        </Link>
                        <Link to="/electro-acoustic" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>
                            <span className="dropdown-item-text">Electroacústicas</span>
                        </Link>
                    </div>
                </div>

                <Link to="/nosotros" className="nav-link mobile-nav-link" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>
                    <span className="nav-link-text">Nosotros</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
