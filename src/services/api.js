import { API_BASE_URL } from '../utils/constants';

/**
 * Generic API request handler with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response data
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error('API Request Error:', error);
    return { data: null, error: error.message };
  }
};

export const api = {
  get: (endpoint) => apiRequest(endpoint, { method: 'GET' }),
  post: (endpoint, body) => apiRequest(endpoint, { 
    method: 'POST', 
    body: JSON.stringify(body) 
  }),
  put: (endpoint, body) => apiRequest(endpoint, { 
    method: 'PUT', 
    body: JSON.stringify(body) 
  }),
  delete: (endpoint) => apiRequest(endpoint, { method: 'DELETE' }),
};