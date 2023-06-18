import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { CartContext } from './CartContext';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  const { cart, getCartCount } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header__links">
        <a className="header__link" href="/">Home</a>
        <a className="header__link" href="/store">Store</a>
        <Link to="/about" className="header__link">About</Link>
        <Link to="/contact" className="header__link">Contact Us</Link> {/* New link for Contact Us page */}
        <Link to="/Product" className="header__link">ProductPage</Link>
      </div>
      <button className="header__cart-button">
        <Link to="/cart" className="cart-button">
          Cart <span className="cart-count">{getCartCount()}</span>
        </Link>
      </button>
    </header>
  );
};


export default Header;
