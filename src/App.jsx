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
    { id: 1, name: "Stratos Elite", price: 1299990, image: "https://images.unsplash.com/photo-1550985616-1081025a7217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Les Paul Custom", price: 2499990, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Telecaster Pro", price: 1499990, image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Jazzmaster Vintage", price: 1899990, image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "SG Standard", price: 1099990, image: "https://images.unsplash.com/photo-1557672211-b9923419b4fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Hollowbody Artcore", price: 949990, image: "https://images.unsplash.com/photo-1560132204-747a0fc678fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
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
