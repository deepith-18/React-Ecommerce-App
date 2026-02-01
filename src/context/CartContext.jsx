import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { cartReducer } from './cartReducer';
import { CART_ACTIONS, STORAGE_KEYS } from '../utils/constants';
import { calculateCartTotals } from '../utils/formatters';

// Create Context
export const CartContext = createContext();

// Initial State
const initialState = {
  items: [],
};

/**
 * CartProvider - Global cart state provider
 * Manages cart items and provides cart operations to the entire app
 */
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) {
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: JSON.parse(savedCart) });
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state.items]);

  // Memoized cart totals - only recalculate when items change
  const cartTotals = useMemo(() => calculateCartTotals(state.items), [state.items]);

  // Cart operations
  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const isInCart = (productId) => {
    return state.items.some((item) => item.id === productId);
  };

  const getCartItemQuantity = (productId) => {
    const item = state.items.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems: state.items,
    cartTotals,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getCartItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};