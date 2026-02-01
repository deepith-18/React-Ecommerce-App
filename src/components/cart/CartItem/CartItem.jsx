import React from 'react';
import { useCart } from '../../../hooks/useCart';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className={styles.card}>
      {/* 1. IMAGE FIX: Use an img tag with src={item.image} */}
      <div className={styles.imageContainer}>
        <img 
          src={item.image} 
          alt={item.title} 
          className={styles.image} 
        />
      </div>

      <div className={styles.info}>
        {/* 2. TITLE FIX: Use item.title (common in APIs) or fallback to item.name */}
        <h3 className={styles.name}>{item.title || item.name}</h3>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.quantityWrapper}>
          <button 
            className={styles.qtyBtn} 
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          
          <span className={styles.qtyText}>{item.quantity}</span>
          
          <button 
            className={styles.qtyBtn} 
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <button 
          className={styles.removeBtn} 
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;