import React, { useState } from 'react';

const GuitarCard = ({ guitar, onAddToCart }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`card ${isHovered ? 'card-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-image-container">
                <img
                    src={guitar.image || "/images/default-guitar.jpg"}
                    alt={guitar.name}
                    className="card-image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/300x400/1a1a1a/d4af37?text=Guitar";
                    }}
                />
                {/* Category badge */}
                <div className="category-badge">
                    {guitar.category === 'electric' ? 'Eléctrica' :
                     guitar.category === 'acoustic' ? 'Acústica' : 'Electroacústica'}
                </div>
            </div>
            <h3 className="card-title">{guitar.name}</h3>
            <span className="card-price">${guitar.price.toLocaleString('es-CL')} CLP</span>

            {/* Brand Description */}
            <div className="brand-description">
                {guitar.brandDescription}
            </div>

            <button className="btn-primary" onClick={() => onAddToCart(guitar)}>
                Añadir al Carrito
            </button>
        </div>
    );
};

export default GuitarCard;
