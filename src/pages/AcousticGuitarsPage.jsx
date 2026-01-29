import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';

const AcousticGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Acoustic guitars data
  const acousticGuitars = [
    { id: 6, name: "Dreadnought Classic", price: 899990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Martin es una marca histórica fundada en 1833, reconocida por guitarras acústicas de primera calidad." },
    { id: 7, name: "Auditorium Cutaway", price: 1149990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Taylor es famosa por sus guitarras acústicas modernas con excelente intonación y proyección." },
    { id: 8, name: "Classical Nylon", price: 549990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Yamaha fabrica guitarras clásicas con cuerda de nailon de excelente calidad y sonido equilibrado." },
    { id: 9, name: "Parlor Vintage", price: 749990, image: "https://images.unsplash.com/photo-1578301978010-4671ecda36d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Gretsch combina tradición y estilo vintage en guitarras acústicas únicas." },
    { id: 16, name: "Grand Concert", price: 1049990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Taylor Grand Concert ofrece un sonido equilibrado con excelente respuesta en frecuencias medias." },
    { id: 17, name: "OM Size", price: 1249990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Martin OM Size combina el cuerpo Auditorium con la escala de guitarra de concierto." },
    { id: 18, name: "Jumbo Vintage", price: 999990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Gibson Jumbo ofrece un sonido potente con cuerpo grande y resonancia profunda." },
    { id: 19, name: "Small Body", price: 799990, image: "https://images.unsplash.com/photo-1578301978010-4671ecda36d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Yamaha Small Body guitarras ofrecen comodidad y sonido cálido para intérpretes acústicos." }
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
            Guitarras Acústicas
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Explora guitarras acústicas con sonido natural y cálido, ideales para compositores y sesiones íntimas.
          </p>

          <div className="grid-container">
            {acousticGuitars.map((guitar) => (
              <GuitarCard key={guitar.id} guitar={guitar} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcousticGuitarsPage;