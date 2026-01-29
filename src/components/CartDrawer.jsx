import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h3>Tu Carrito ({cartItems.length})</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Tu carrito está vacío.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <span className="cart-item-price">${item.price.toLocaleString('es-CL')} CLP</span>
                                </div>
                                <button className="remove-btn" onClick={() => onRemove(index)}>&times;</button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>${total.toLocaleString('es-CL')} CLP</span>
                    </div>
                    <button className="btn-primary" style={{ width: '100%' }} disabled={cartItems.length === 0}>
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
