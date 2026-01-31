import React from 'react';
import GuitarCard from './GuitarCard';

const ProductGrid = ({ guitars, onAddToCart }) => {
    // Separate guitars by category
    const electricGuitars = guitars.filter(guitar => guitar.category === 'electric');
    const acousticGuitars = guitars.filter(guitar => guitar.category === 'acoustic');
    const electroAcousticGuitars = guitars.filter(guitar => guitar.category === 'electro-acoustic');

    return (
        <section id="guitars" className="container">
            <h2 className="text-gradient section-title">
                Colección de Guitarras
            </h2>
            <p className="section-subtitle">
                Explora nuestra selección cuidadosamente curada de guitarras premium.
            </p>

            {/* Electric Guitars Section */}
            <section className="category-section">
                <div className="category-header">
                    <div className="category-icon">
                        <span>⚡</span>
                    </div>
                    <h3 className="text-gradient category-title">
                        Guitarras Eléctricas
                    </h3>
                </div>
                <p className="category-description">
                    Instrumentos legendarios con sonido distintivo, perfectos para rock, blues, jazz y metal.
                </p>
                <div className="grid-container">
                    {electricGuitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>

            {/* Acoustic Guitars Section */}
            <section className="category-section">
                <div className="category-header">
                    <div className="category-icon">
                        <span>🎵</span>
                    </div>
                    <h3 className="text-gradient category-title">
                        Guitarras Acústicas
                    </h3>
                </div>
                <p className="category-description">
                    Sonido natural y cálido, ideales para compositores, cantautores y sesiones íntimas.
                </p>
                <div className="grid-container">
                    {acousticGuitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>

            {/* Electro-Acoustic Guitars Section */}
            <section className="category-section">
                <div className="category-header">
                    <div className="category-icon">
                        <span>🎸</span>
                    </div>
                    <h3 className="text-gradient category-title">
                        Guitarras Electroacústicas
                    </h3>
                </div>
                <p className="category-description">
                    Combina lo mejor de ambos mundos: sonido acústico natural con capacidad de amplificación.
                </p>
                <div className="grid-container">
                    {electroAcousticGuitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default ProductGrid;
