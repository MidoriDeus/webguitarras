import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            {/* Background image with overlay */}
            <div className="hero-background">
                <img
                    src="/images/guitarra electrica cafe.png"
                    alt="Guitarra elegante en el fondo"
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>

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

            {/* Floating guitar element */}
            <div className="floating-guitar-element">
                <img
                    src="/images/guitarra electroacustica clara.png"
                    alt="Guitarra flotante"
                    className="floating-guitar"
                />
            </div>
        </section>
    );
};

export default Hero;
