import React, { useState } from 'react';
import Header from '../components/Header';
import GuitarCard from '../components/GuitarCard';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import guitarImages from '../utils/imagePaths';

const AcousticGuitarsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Acoustic guitars data
  const acousticGuitars = [
    { id: 6, name: "Dreadnought Classic", price: 899990, image: guitarImages["dreadnought-classic"], category: "acoustic", brandDescription: "Martin es una marca histórica fundada en 1833, reconocida por guitarras acústicas de primera calidad." },
    { id: 7, name: "Auditorium Cutaway", price: 1149990, image: guitarImages["auditorium-cutaway"], category: "acoustic", brandDescription: "Taylor es famosa por sus guitarras acústicas modernas con excelente intonación y proyección." },
    { id: 8, name: "Classical Nylon", price: 549990, image: guitarImages["classical-nylon"], category: "acoustic", brandDescription: "Yamaha fabrica guitarras clásicas con cuerda de nailon de excelente calidad y sonido equilibrado." },
    { id: 9, name: "Parlor Vintage", price: 749990, image: guitarImages["parlor-vintage"], category: "acoustic", brandDescription: "Gretsch combina tradición y estilo vintage en guitarras acústicas únicas." },
    { id: 16, name: "Grand Concert", price: 1049990, image: guitarImages["grand-concert"], category: "acoustic", brandDescription: "Taylor Grand Concert ofrece un sonido equilibrado con excelente respuesta en frecuencias medias." },
    { id: 17, name: "OM Size", price: 1249990, image: guitarImages["om-size"], category: "acoustic", brandDescription: "Martin OM Size combina el cuerpo Auditorium con la escala de guitarra de concierto." },
    { id: 18, name: "Jumbo Vintage", price: 999990, image: guitarImages["jumbo-vintage"], category: "acoustic", brandDescription: "Gibson Jumbo ofrece un sonido potente con cuerpo grande y resonancia profunda." },
    { id: 19, name: "Small Body", price: 799990, image: guitarImages["small-body"], category: "acoustic", brandDescription: "Yamaha Small Body guitarras ofrecen comodidad y sonido cálido para intérpretes acústicos." }
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

export default AcousticGuitarsPage;