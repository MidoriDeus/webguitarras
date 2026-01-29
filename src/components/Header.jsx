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
            const menuButton = document.querySelector('.mobile-menu-button');
            const mobileMenu = document.querySelector('.mobile-menu');
            const guitarDropdown = document.querySelector('.dropdown');
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
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>
                    <h2 className="text-gradient">RiffMaster</h2>
                </Link>
            </div>

            <nav className="nav-links">
                <Link to="/" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>Inicio</Link>

                {/* Desktop dropdown menu */}
                <div className={`dropdown ${isGuitarOpen ? 'active' : ''}`}>
                    <button
                        className="nav-link dropdown-toggle"
                        onClick={() => setIsGuitarOpen(prev => !prev)}
                        aria-expanded={isGuitarOpen}
                        aria-haspopup="true"
                    >
                        Guitarras
                    </button>

                    {isGuitarOpen && (
                        <div className="dropdown-menu" role="menu">
                            <Link to="/electric" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                Eléctricas
                            </Link>
                            <Link to="/acoustic" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                Acústicas
                            </Link>
                            <Link to="/electro-acoustic" className="dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}} role="menuitem">
                                Electroacústicas
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/nosotros" className="nav-link" onClick={() => { setIsMenuOpen(false); setIsGuitarOpen(false); }}>Nosotros</Link>
            </nav>

            {/* Mobile menu toggle button */}
            <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="nav-link mobile-nav-link" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>Inicio</Link>

                    <div className="mobile-dropdown">
                        <div className="mobile-dropdown-header" onClick={() => setIsGuitarOpen(prev => !prev)}>
                            <span>Guitarras</span>
                            <span className="dropdown-arrow">{isGuitarOpen ? '▲' : '▼'}</span>
                        </div>

                        {isGuitarOpen && (
                            <div className="mobile-submenu expanded">
                                <Link to="/electric" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>Eléctricas</Link>
                                <Link to="/acoustic" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>Acústicas</Link>
                                <Link to="/electro-acoustic" className="dropdown-item mobile-dropdown-item" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>Electroacústicas</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/nosotros" className="nav-link mobile-nav-link" onClick={() => {setIsMenuOpen(false); setIsGuitarOpen(false);}}>Nosotros</Link>
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
