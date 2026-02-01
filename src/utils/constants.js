// API Configuration
export const API_BASE_URL = 'https://fakestoreapi.com';

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id) => `/products/${id}`,
  CATEGORIES: '/products/categories',
  CATEGORY_PRODUCTS: (category) => `/products/category/${category}`,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'ecommerce_cart',
};

// Cart Action Types
export const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART',
};

// UI Constants
export const SKELETON_COUNT = 8;
export const MAX_CART_QUANTITY = 99;
export const MIN_CART_QUANTITY = 1;

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
};