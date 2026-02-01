import React from 'react';
import { useCart } from '../../../hooks/useCart';
import styles from './CartBadge.module.css';

/**
 * CartBadge - Displays cart item count
 * Uses memoized cart totals for optimal performance
 */
export const CartBadge = () => {
  const { cartTotals } = useCart();

  if (cartTotals.totalItems === 0) return null;

  return (
    <span className={styles.badge} aria-label={`${cartTotals.totalItems} items in cart`}>
      {cartTotals.totalItems > 99 ? '99+' : cartTotals.totalItems}
    </span>
  );
};