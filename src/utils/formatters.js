/**
 * Format price to currency string
 * @param {number} price - Price value
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Calculate cart totals
 * @param {Array} cartItems - Array of cart items
 * @returns {Object} Cart totals (subtotal, totalItems, tax, total)
 */
export const calculateCartTotals = (cartItems) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    totalItems,
    tax: parseFloat(tax.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
  };
};