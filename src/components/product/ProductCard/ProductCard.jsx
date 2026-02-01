import React from 'react';

// ✅ CORRECT PATH (3 levels up: ProductCard -> product -> components -> src)
import { useCart } from '../../../hooks/useCart'; 

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Assuming you have this hook

  return (
    <div className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={styles.image} 
        />
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        
        {/* Meta: Category & Rating */}
        <div className={styles.meta}>
          <span className={styles.category}>{product.category}</span>
          <div className={styles.rating}>
            ★ <span>{product.rating?.rate || 4.5}</span>
            <span className={styles.ratingCount}>({product.rating?.count || 100})</span>
          </div>
        </div>

        <h3 className={styles.title} title={product.title}>
          {product.title}
        </h3>
        
        <p className={styles.description}>
          {product.description}
        </p>

        {/* Footer: Price & CTA */}
        <div className={styles.footer}>
          <span className={styles.price}>
            ${product.price.toFixed(2)}
          </span>
          <button 
            className={styles.button}
            onClick={() => addToCart && addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;