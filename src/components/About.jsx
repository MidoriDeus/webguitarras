import React from 'react';

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
                    margin: '0 auto',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                }}>
                    Somos una empresa dedicada a la venta de guitarras eléctricas de marcas de renombre.
                    Nuestra pasión es conectar a músicos con instrumentos de calidad superior,
                    seleccionados meticulosamente para garantizar el mejor tono y experiencia de ejecución.
                    Desde clásicos atemporales hasta innovaciones modernas, RiffMaster es tu destino definitivo.
                </p>
            </div>
        </section>
    );
};

export default About;
