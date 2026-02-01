import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmptyCart.module.css';

/**
 * EmptyCart - Displayed when cart is empty
 * Provides clear call-to-action to continue shopping
 */
export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.emptyCart}>
      <div className={styles.icon}>🛒</div>
      <h2 className={styles.title}>Your Cart is Empty</h2>
      <p className={styles.message}>
        Looks like you haven't added any items to your cart yet.
      </p>
      <button 
        className={styles.button}
        onClick={() => navigate('/products')}
      >
        Start Shopping
      </button>
    </div>
  );
};