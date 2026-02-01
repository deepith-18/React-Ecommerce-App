import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useCart } from '../../hooks/useCart';
import { productService } from '../../services/productService';
import { formatPrice } from '../../utils/formatters';
import styles from './ProductDetailPage.module.css';

/**
 * ProductDetailPage - Detailed product view
 * Shows full product information with add to cart functionality
 */
export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart, getCartItemQuantity } = useCart();

  const { data: product, loading, error } = useFetch(
    () => productService.getProductById(id),
    [id]
  );

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.error}>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const cartQuantity = getCartItemQuantity(product.id);

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/products')}>
        ← Back to Products
      </button>

      <div className={styles.product}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </div>

        <div className={styles.details}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>

          {product.rating && (
            <div className={styles.rating}>
              <span className={styles.stars}>⭐ {product.rating.rate}</span>
              <span className={styles.reviews}>({product.rating.count} reviews)</span>
            </div>
          )}

          <p className={styles.description}>{product.description}</p>

          <div className={styles.priceSection}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {cartQuantity > 0 && (
              <span className={styles.inCart}>
                {cartQuantity} in cart
              </span>
            )}
          </div>

          <div className={styles.actions}>
            <button 
              className={`${styles.addButton} ${isInCart(product.id) ? styles.added : ''}`}
              onClick={handleAddToCart}
            >
              {isInCart(product.id) ? '✓ Add More to Cart' : '+ Add to Cart'}
            </button>
            <button 
              className={styles.viewCartButton}
              onClick={() => navigate('/cart')}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};