import React from 'react';

const GuitarCard = ({ guitar, onAddToCart }) => {
    return (
        <div className="card">
            <div className="card-image-container">
                {/* Placeholder for guitar image - using a rock-themed placeholder or abstract */}
                <img
                    src={guitar.image || "https://placehold.co/300x400/1a1a1a/d4af37?text=Guitar"}
                    alt={guitar.name}
                    className="card-image"
                />
            </div>
            <h3 className="card-title">{guitar.name}</h3>
            <span className="card-price">${guitar.price.toLocaleString('es-CL')} CLP</span>
            <button className="btn-primary" onClick={() => onAddToCart(guitar)} style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                Añadir al Carrito
            </button>
        </div>
    );
};

export default GuitarCard;
