import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const ElectricGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Electric guitars data
  const electricGuitars = [
    { id: 1, name: "Stratos Elite", price: 1299990, image: "https://images.unsplash.com/photo-1550985616-1081025a7217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender es una marca icónica conocida por sus guitarras de alta calidad y sonido distintivo." },
    { id: 2, name: "Les Paul Custom", price: 2499990, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson es sinónimo de excelencia en guitarras eléctricas desde 1902, creando instrumentos legendarios." },
    { id: 3, name: "Telecaster Pro", price: 1499990, image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender Telecaster es una guitarra versátil con un tono brillante y distintivo." },
    { id: 4, name: "Jazzmaster Vintage", price: 1899990, image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson Jazzmaster ofrece un tono cálido y versátil ideal para jazz y otros géneros." },
    { id: 5, name: "SG Standard", price: 1099990, image: "https://images.unsplash.com/photo-1557672211-b9923419b4fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson SG es conocida por su cuerpo delgado y tono agresivo, popular en rock y metal." },
    { id: 13, name: "Stratocaster Vintage", price: 1399990, image: "https://images.unsplash.com/photo-1550985616-1081025a7217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender Stratocaster es una guitarra icónica con versatilidad tonal y comodidad excepcional." },
    { id: 14, name: "Explorer Classic", price: 1199990, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson Explorer es una guitarra de cuerpo sólido con un diseño angular distintivo." },
    { id: 15, name: "Precision Bass", price: 1599990, image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender Precision Bass estableció el estándar para bajos eléctricos profesionales." }
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
            Guitarras Eléctricas
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Descubre nuestra colección de guitarras eléctricas legendarias con sonido distintivo.
          </p>

          <div className="grid-container">
            {electricGuitars.map((guitar) => (
              <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ElectricGuitarsPage;