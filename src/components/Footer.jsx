import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>RiffMaster</h3>
            <p className="footer-text">
                © {new Date().getFullYear()} RiffMaster Guitars. Todos los derechos reservados. <br />
                Diseñado con pasión por el sonido. <br />
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Creado por LMMG</span>
            </p>
        </footer>
    );
};

export default Footer;
