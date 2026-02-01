import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // ✅ IMPORTANT: Initialize with empty array []
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    // Fetch initial data from API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const addProduct = (newProduct) => {
    setProducts(prev => [{ ...newProduct, id: Date.now() }, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};