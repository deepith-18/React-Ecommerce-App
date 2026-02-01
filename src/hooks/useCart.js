import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * Custom hook to access cart context
 * Provides clean API for cart operations throughout the app
 * @returns {Object} Cart context value
 */
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  
  return context;
};