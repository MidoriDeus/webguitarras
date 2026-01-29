import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const ElectroAcousticGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Electro-acoustic guitars data
  const electroAcousticGuitars = [
    { id: 10, name: "Grand Auditorium EQ", price: 1399990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Taylor ofrece guitarras electroacústicas con sistemas de pastilla de alta fidelidad." },
    { id: 11, name: "Folk Cutaway Preamp", price: 1099990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Martin combina su legado artesanal con tecnología moderna para actuaciones en vivo." },
    { id: 12, name: "Concert Stage", price: 1599990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Gibson presenta guitarras electroacústicas ideales para escenarios con gran sonoridad." },
    { id: 20, name: "Travel Acoustic", price: 899990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Yamaha Travel Acoustic guitarras compactas con salida de audio para actuaciones portátiles." },
    { id: 21, name: "Studio Series", price: 1499990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Taylor Studio Series ofrece sonido profesional con electrónica integrada de alta calidad." },
    { id: 22, name: "Vintage Reissue", price: 1699990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Gibson Vintage Reissue combina el sonido clásico con electrónica moderna para grabación." },
    { id: 23, name: "Fingerstyle Pro", price: 1299990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Martin Fingerstyle Pro está diseñada específicamente para técnicas de fingerstyle con electrónica sensible." },
    { id: 24, name: "Performance Deluxe", price: 1799990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Taylor Performance Deluxe ofrece sonido premium con sistema de pastilla de última generación." }
  ];

  const addToCart = (guitar) => {
    setCartItems([...cartItems, guitar]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <div className="app">
      <Header
        onCartClick={() => setIsCartOpen(!isCartOpen)}
        cartCount={cartItems.length}
      />
      
      <main style={{ marginTop: '80px' }}>
        <section className="container" style={{ padding: '2rem 1rem', marginTop: '2rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
            Guitarras Electroacústicas
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Combina lo mejor de ambos mundos: sonido acústico natural con capacidad de amplificación.
          </p>

          <div className="grid-container">
            {electroAcousticGuitars.map((guitar) => (
              <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ElectroAcousticGuitarsPage;