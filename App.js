import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Store from './Components/Store';
import About from './Components/About';
import Cart from './Components/Cart';
import './App.css';
import Footer from './Components/Footer';
import { CartContext, CartProvider } from './Components/CartContext';
import ContactUs from './Components/ContactUs';
import ProductPage from './Components/ProductPage';


const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <CartProvider value={{ cart, addToCart: setCart }}>
        <div>
          <Header />
          <h2 className="store__generics">The Generics</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
