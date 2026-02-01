import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import the New Providers
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

// 2. Import Layout & Components
import { Navbar } from './components/layout/Navbar/Navbar';

// 3. Import Pages
import ProductList from './pages/ProductList/ProductList';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';
import { Cart } from './pages/Cart/Cart';
import Login from './pages/Login/Login';            // <--- NEW
import AdminDashboard from './pages/Admin/AdminDashboard'; // <--- NEW

import './styles/global.css';

/**
 * App Component - Root application component
 * Sets up routing and global state providers
 */
function App() {
  return (
    // 4. Wrap everything in the Providers
    // AuthProvider must be at the top so User data is available everywhere
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          
          <BrowserRouter>
            <div className="app">
              <Navbar />
              
              <main className="main-content">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<ProductList />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<Cart />} />
                  
                  {/* Authentication Routes (NEW) */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<AdminDashboard />} />

                  {/* 404 Route */}
                  <Route path="*" element={
                    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                      <h1>404 - Page Not Found</h1>
                      <p>The page you're looking for doesn't exist.</p>
                    </div>
                  } />
                </Routes>
              </main>
            </div>
          </BrowserRouter>

        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;