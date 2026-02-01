import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartBadge } from '../../cart/CartBadge/CartBadge';
import styles from './Navbar.module.css';

/**
 * Navbar - Main navigation component
 * Includes cart badge with live item count
 */
export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          🛍️ ShopHub
        </Link>
        
        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`${styles.link} ${isActive('/products') ? styles.active : ''}`}
          >
            Products
          </Link>
          <Link 
            to="/cart" 
            className={`${styles.link} ${styles.cartLink} ${isActive('/cart') ? styles.active : ''}`}
          >
            <span className={styles.cartIcon}>🛒</span>
            Cart
            <CartBadge />
          </Link>
        </div>
      </div>
    </nav>
  );
};