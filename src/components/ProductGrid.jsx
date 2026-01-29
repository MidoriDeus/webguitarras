import React from 'react';
import GuitarCard from './GuitarCard';

const ProductGrid = ({ guitars, onAddToCart }) => {
    return (
        <section id="guitars" className="container" style={{ padding: '4rem 1rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
                Colección Destacada
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Seleccionadas a mano por su tono y desempeño.
            </p>

            <div className="grid-container">
                {guitars.map((guitar) => (
                    <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={onAddToCart} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
