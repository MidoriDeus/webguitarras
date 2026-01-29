import React, { useState } from 'react';

const GuitarCard = ({ guitar, onAddToCart }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 15px 35px -10px rgba(0, 0, 0, 0.7)' : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            <div className="card-image-container">
                <img
                    src={guitar.image || "/src/assets/images/default-guitar.jpg"}
                    alt={guitar.name}
                    className="card-image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/300x400/1a1a1a/d4af37?text=Guitar";
                    }}
                    style={{
                        transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
                        transition: 'transform 0.5s ease'
                    }}
                />
                {/* Category badge */}
                <div className="category-badge" style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'var(--accent-primary)',
                    color: '#000',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    {guitar.category === 'electric' ? 'Eléctrica' :
                     guitar.category === 'acoustic' ? 'Acústica' : 'Electroacústica'}
                </div>
            </div>
            <h3 className="card-title">{guitar.name}</h3>
            <span className="card-price">${guitar.price.toLocaleString('es-CL')} CLP</span>

            {/* Brand Description */}
            <div className="brand-description" style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginTop: '0.8rem',
                marginBottom: '1rem',
                minHeight: '60px',
                lineHeight: '1.4'
            }}>
                {guitar.brandDescription}
            </div>

            <button className="btn-primary" onClick={() => onAddToCart(guitar)} style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                Añadir al Carrito
            </button>
        </div>
    );
};

export default GuitarCard;
