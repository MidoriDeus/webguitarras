import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">
                    Eleva tu <br />
                    <span className="text-gradient">Ambición.</span>
                </h1>
                <p className="hero-subtitle">
                    Instrumentos premium para el virtuoso moderno. Creados para el tono, construidos para la eternidad.
                </p>
                <button className="btn-primary" onClick={() => document.getElementById('guitars').scrollIntoView({ behavior: 'smooth' })}>
                    Ver Colección
                </button>
            </div>
        </section>
    );
};

export default Hero;
