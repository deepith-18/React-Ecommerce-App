import { CART_ACTIONS, MAX_CART_QUANTITY, MIN_CART_QUANTITY } from '../utils/constants';

/**
 * Cart Reducer - Handles all cart state mutations
 * Follows Redux pattern for predictable state updates
 * @param {Object} state - Current cart state
 * @param {Object} action - Action object with type and payload
 * @returns {Object} New cart state
 */
export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // Item already exists - increment quantity
      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        const currentQuantity = updatedItems[existingItemIndex].quantity;
        
        // Respect max quantity limit
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: Math.min(currentQuantity + 1, MAX_CART_QUANTITY),
        };

        return { ...state, items: updatedItems };
      }

      // New item - add to cart
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      
      // Validate quantity range
      const validQuantity = Math.max(
        MIN_CART_QUANTITY,
        Math.min(quantity, MAX_CART_QUANTITY)
      );

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: validQuantity } : item
        ),
      };
    }

    case CART_ACTIONS.CLEAR_CART: {
      return { ...state, items: [] };
    }

    case CART_ACTIONS.LOAD_CART: {
      return { ...state, items: action.payload };
    }

    default:
      return state;
  }
};