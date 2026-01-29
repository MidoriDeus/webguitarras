import React, { useState } from 'react';
import './components/components.css'; // Global component styles
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import About from './components/About';
import FadeInSection from './components/FadeInSection';

function App() {
  // Mock Data
  const [guitars] = useState([
    // Electric Guitars
    { id: 1, name: "Stratos Elite", price: 1299990, image: "https://images.unsplash.com/photo-1550985616-1081025a7217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender es una marca icónica conocida por sus guitarras de alta calidad y sonido distintivo." },
    { id: 2, name: "Les Paul Custom", price: 2499990, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson es sinónimo de excelencia en guitarras eléctricas desde 1902, creando instrumentos legendarios." },
    { id: 3, name: "Telecaster Pro", price: 1499990, image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Fender Telecaster es una guitarra versátil con un tono brillante y distintivo." },
    { id: 4, name: "Jazzmaster Vintage", price: 1899990, image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson Jazzmaster ofrece un tono cálido y versátil ideal para jazz y otros géneros." },
    { id: 5, name: "SG Standard", price: 1099990, image: "https://images.unsplash.com/photo-1557672211-b9923419b4fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electric", brandDescription: "Gibson SG es conocida por su cuerpo delgado y tono agresivo, popular en rock y metal." },

    // Acoustic Guitars
    { id: 6, name: "Dreadnought Classic", price: 899990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Martin es una marca histórica fundada en 1833, reconocida por guitarras acústicas de primera calidad." },
    { id: 7, name: "Auditorium Cutaway", price: 1149990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Taylor es famosa por sus guitarras acústicas modernas con excelente intonación y proyección." },
    { id: 8, name: "Classical Nylon", price: 549990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Yamaha fabrica guitarras clásicas con cuerda de nailon de excelente calidad y sonido equilibrado." },
    { id: 9, name: "Parlor Vintage", price: 749990, image: "https://images.unsplash.com/photo-1578301978010-4671ecda36d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "acoustic", brandDescription: "Gretsch combina tradición y estilo vintage en guitarras acústicas únicas." },

    // Electro-Acoustic Guitars
    { id: 10, name: "Grand Auditorium EQ", price: 1399990, image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Taylor ofrece guitarras electroacústicas con sistemas de pastilla de alta fidelidad." },
    { id: 11, name: "Folk Cutaway Preamp", price: 1099990, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Martin combina su legado artesanal con tecnología moderna para actuaciones en vivo." },
    { id: 12, name: "Concert Stage", price: 1599990, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "electro-acoustic", brandDescription: "Gibson presenta guitarras electroacústicas ideales para escenarios con gran sonoridad." }
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
          <ProductGrid guitars={guitars} onAddToCart={addToCart} />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
