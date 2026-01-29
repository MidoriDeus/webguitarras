import React from 'react';
import GuitarCard from './GuitarCard';

const ProductGrid = ({ guitars, onAddToCart }) => {
    // Separate guitars by category
    const electricGuitars = guitars.filter(guitar => guitar.category === 'electric');
    const acousticGuitars = guitars.filter(guitar => guitar.category === 'acoustic');
    const electroAcousticGuitars = guitars.filter(guitar => guitar.category === 'electro-acoustic');

    return (
        <section id="guitars" className="container">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', marginTop: '4rem' }}>
                Colección de Guitarras
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Explora nuestra selección cuidadosamente curada de guitarras premium.
            </p>

            {/* Electric Guitars Section */}
            <section className="category-section" style={{ padding: '2rem 1rem' }}>
                <div className="category-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div className="category-icon" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem'
                    }}>
                        <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>⚡</span>
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>
                        Guitarras Eléctricas
                    </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
                    Instrumentos legendarios con sonido distintivo, perfectos para rock, blues, jazz y metal.
                </p>
                <div className="grid-container">
                    {electricGuitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>

            {/* Acoustic Guitars Section */}
            <section className="category-section" style={{ padding: '2rem 1rem', marginTop: '3rem' }}>
                <div className="category-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div className="category-icon" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem'
                    }}>
                        <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>🎵</span>
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>
                        Guitarras Acústicas
                    </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
                    Sonido natural y cálido, ideales para compositores, cantautores y sesiones íntimas.
                </p>
                <div className="grid-container">
                    {acousticGuitars.map((guitar) => (
                        <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>

            {/* Electro-Acoustic Guitars Section */}
            <section className="category-section" style={{ padding: '2rem 1rem', marginTop: '3rem' }}>
                <div className="category-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div className="category-icon" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem'
                    }}>
                        <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>🎸</span>
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>
                        Guitarras Electroacústicas
                    </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
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
