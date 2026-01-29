import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import guitarImages from '../utils/imagePaths';

const ElectroAcousticGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Electro-acoustic guitars data
  const electroAcousticGuitars = [
    { id: 10, name: "Grand Auditorium EQ", price: 1399990, image: guitarImages["grand-auditorium-eq"], category: "electro-acoustic", brandDescription: "Taylor ofrece guitarras electroacústicas con sistemas de pastilla de alta fidelidad." },
    { id: 11, name: "Folk Cutaway Preamp", price: 1099990, image: guitarImages["folk-cutaway-preamp"], category: "electro-acoustic", brandDescription: "Martin combina su legado artesanal con tecnología moderna para actuaciones en vivo." },
    { id: 12, name: "Concert Stage", price: 1599990, image: guitarImages["concert-stage"], category: "electro-acoustic", brandDescription: "Gibson presenta guitarras electroacústicas ideales para escenarios con gran sonoridad." },
    { id: 20, name: "Travel Acoustic", price: 899990, image: guitarImages["travel-acoustic"], category: "electro-acoustic", brandDescription: "Yamaha Travel Acoustic guitarras compactas con salida de audio para actuaciones portátiles." },
    { id: 21, name: "Studio Series", price: 1499990, image: guitarImages["studio-series"], category: "electro-acoustic", brandDescription: "Taylor Studio Series ofrece sonido profesional con electrónica integrada de alta calidad." },
    { id: 22, name: "Vintage Reissue", price: 1699990, image: guitarImages["vintage-reissue"], category: "electro-acoustic", brandDescription: "Gibson Vintage Reissue combina el sonido clásico con electrónica moderna para grabación." },
    { id: 23, name: "Fingerstyle Pro", price: 1299990, image: guitarImages["fingerstyle-pro"], category: "electro-acoustic", brandDescription: "Martin Fingerstyle Pro está diseñada específicamente para técnicas de fingerstyle con electrónica sensible." },
    { id: 24, name: "Performance Deluxe", price: 1799990, image: guitarImages["performance-deluxe"], category: "electro-acoustic", brandDescription: "Taylor Performance Deluxe ofrece sonido premium con sistema de pastilla de última generación." }
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

      <FadeInSection>
        <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center', marginTop: '2rem' }}>
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              Contáctanos
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left'
            }}>
              <div>
                <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                  Dirección
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Av. Providencia 1234, Oficina 502<br/>
                  Santiago, Chile
                </p>
              </div>

              <div>
                <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                  Horario
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Lunes a Viernes: 10:00 - 20:00<br/>
                  Sábados: 10:00 - 18:00
                </p>
              </div>

              <div>
                <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                  Información
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Teléfono: +56 2 1234 5678<br/>
                  Email: contacto@riiffmaster.cl
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default ElectroAcousticGuitarsPage;