import { api } from './api';
import { API_ENDPOINTS } from '../utils/constants';

/**
 * Product service - Abstraction layer for product-related API calls
 */
export const productService = {
  /**
   * Fetch all products
   * @returns {Promise} List of products
   */
  getAllProducts: async () => {
    return await api.get(API_ENDPOINTS.PRODUCTS);
  },

  /**
   * Fetch single product by ID
   * @param {string|number} id - Product ID
   * @returns {Promise} Product details
   */
  getProductById: async (id) => {
    return await api.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
  },

  /**
   * Fetch all categories
   * @returns {Promise} List of categories
   */
  getCategories: async () => {
    return await api.get(API_ENDPOINTS.CATEGORIES);
  },

  /**
   * Fetch products by category
   * @param {string} category - Category name
   * @returns {Promise} List of products in category
   */
  getProductsByCategory: async (category) => {
    return await api.get(API_ENDPOINTS.CATEGORY_PRODUCTS(category));
  },
};
