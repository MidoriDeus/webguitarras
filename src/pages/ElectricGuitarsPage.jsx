import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import guitarImages from '../utils/imagePaths';

const ElectricGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Electric guitars data
  const electricGuitars = [
    { id: 1, name: "Stratos Elite", price: 1299990, image: guitarImages["stratos-elite"], category: "electric", brandDescription: "Fender es una marca icónica conocida por sus guitarras de alta calidad y sonido distintivo." },
    { id: 2, name: "Les Paul Custom", price: 2499990, image: guitarImages["les-paul-custom"], category: "electric", brandDescription: "Gibson es sinónimo de excelencia en guitarras eléctricas desde 1902, creando instrumentos legendarios." },
    { id: 3, name: "Telecaster Pro", price: 1499990, image: guitarImages["telecaster-pro"], category: "electric", brandDescription: "Fender Telecaster es una guitarra versátil con un tono brillante y distintivo." },
    { id: 4, name: "Jazzmaster Vintage", price: 1899990, image: guitarImages["jazzmaster-vintage"], category: "electric", brandDescription: "Gibson Jazzmaster ofrece un tono cálido y versátil ideal para jazz y otros géneros." },
    { id: 5, name: "SG Standard", price: 1099990, image: guitarImages["sg-standard"], category: "electric", brandDescription: "Gibson SG es conocida por su cuerpo delgado y tono agresivo, popular en rock y metal." },
    { id: 13, name: "Stratocaster Vintage", price: 1399990, image: guitarImages["stratocaster-vintage"], category: "electric", brandDescription: "Fender Stratocaster es una guitarra icónica con versatilidad tonal y comodidad excepcional." },
    { id: 14, name: "Explorer Classic", price: 1199990, image: guitarImages["explorer-classic"], category: "electric", brandDescription: "Gibson Explorer es una guitarra de cuerpo sólido con un diseño angular distintivo." },
    { id: 15, name: "Precision Bass", price: 1599990, image: guitarImages["precision-bass"], category: "electric", brandDescription: "Fender Precision Bass estableció el estándar para bajos eléctricos profesionales." }
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

export default ElectricGuitarsPage;