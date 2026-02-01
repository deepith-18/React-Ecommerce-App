import React from 'react';
import { useCart } from '../../hooks/useCart';

// Correct imports based on your previous file structure
import CartItem from '../../components/cart/CartItem/CartItem';
import CartSummary from '../../components/cart/CartSummary/CartSummary';
import { EmptyCart } from '../../components/cart/EmptyCart/EmptyCart';

import styles from './Cart.module.css';

/**
 * Cart Page - Shopping cart view
 * Displays cart items and order summary
 */
export const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      clearCart();
    }
  };

  // If cart is empty, show the EmptyCart component
  if (!cartItems || cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <button className={styles.clearButton} onClick={handleClearCart}>
          Clear Cart
        </button>
      </header>

      <div className={styles.content}>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className={styles.summary}>
          {/* ✅ FIXED: Passed 'items' prop so CartSummary can calculate totals */}
          <CartSummary items={cartItems} />
        </aside>
      </div>
    </div>
  );
};