import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/components.css'; // Global component styles
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import FadeInSection from './components/FadeInSection';
import ElectricGuitarsPage from './pages/ElectricGuitarsPage';
import AcousticGuitarsPage from './pages/AcousticGuitarsPage';
import ElectroAcousticGuitarsPage from './pages/ElectroAcousticGuitarsPage';

// Home component
const Home = () => {
  // Limited mock data for home page (only 6 guitars)
  const [guitars] = useState([
    // Electric Guitars
    { id: 1, name: "Stratos Elite", price: 1299990, image: "https://images.unsplash.com/photo-1550985616-1081025a7217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender es una marca icónica conocida por sus guitarras de alta calidad y sonido distintivo." },
    { id: 2, name: "Les Paul Custom", price: 2499990, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson es sinónimo de excelencia en guitarras eléctricas desde 1902, creando instrumentos legendarios." },

    // Acoustic Guitars
    { id: 6, name: "Dreadnought Classic", price: 899990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Martin es una marca histórica fundada en 1833, reconocida por guitarras acústicas de primera calidad." },
    { id: 7, name: "Auditorium Cutaway", price: 1149990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Taylor es famosa por sus guitarras acústicas modernas con excelente intonación y proyección." },

    // Electro-Acoustic Guitars
    { id: 10, name: "Grand Auditorium EQ", price: 1399990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Taylor ofrece guitarras electroacústicas con sistemas de pastilla de alta fidelidad." },
    { id: 11, name: "Folk Cutaway Preamp", price: 1099990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Martin combina su legado artesanal con tecnología moderna para actuaciones en vivo." }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

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
    <div className={`app ${!isDarkTheme ? 'light-theme' : ''}`}>
      <Header
        onCartClick={() => setIsCartOpen(!isCartOpen)}
        cartCount={cartItems.length}
        isDarkTheme={isDarkTheme}
        onThemeToggle={toggleTheme}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
      <main>
        <Hero />
        <FadeInSection>
          <section id="guitars" className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>
                Colección Destacada
              </h2>
              <Link to="/electric" className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                Ver Más Guitarras
              </Link>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Seleccionadas a mano por su tono y desempeño.
            </p>

            <div className="grid-container">
              {guitars.map((guitar) => (
                <div key={guitar.id} className="card">
                  <div className="card-image-container">
                    <img
                      src={guitar.image || "https://placehold.co/300x400/1a1a1a/d4af37?text=Guitar"}
                      alt={guitar.name}
                      className="card-image"
                    />
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

                  <button className="btn-primary" onClick={() => addToCart(guitar)} style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
                    Añadir al Carrito
                  </button>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electric" element={<ElectricGuitarsPage />} />
        <Route path="/acoustic" element={<AcousticGuitarsPage />} />
        <Route path="/electro-acoustic" element={<ElectroAcousticGuitarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
