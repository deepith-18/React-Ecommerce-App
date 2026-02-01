import React from 'react';
import { useProducts } from '../../context/ProductContext'; // Import Context
import ProductCard from '../../components/product/ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const { products } = useProducts(); // Get global products

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
      </header>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;