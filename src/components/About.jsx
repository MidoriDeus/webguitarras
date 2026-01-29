import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
            <div className="about-content fade-in-section">
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    Sobre Nosotros
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '800px',
                    margin: '0 auto 2rem',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                }}>
                    Somos una empresa chilena que se encarga en la venta de guitarras.
                    Fundada con la pasión por la música y el compromiso de ofrecer instrumentos de calidad a músicos de todos los niveles.
                </p>

                <Link to="/nosotros" className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                    Conoce Más Sobre RiffMaster
                </Link>
            </div>
        </section>
    );
};

export default About;
