import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { products, deleteProduct, addProduct } = useProducts();
  const { user } = useAuth();
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');

  // Protect the page
  if (!user || user.role !== 'admin') {
    return <div style={{textAlign:'center', marginTop:'50px'}}>Access Denied. Admins only.</div>;
  }

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct({
      title: newTitle,
      price: parseFloat(newPrice),
      description: "New Item Description",
      category: "New",
      image: "https://via.placeholder.com/150"
    });
    setNewTitle('');
    setNewPrice('');
  };

  const styles = {
    container: { maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' },
    form: { background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '40px', display: 'flex', gap: '10px' },
    input: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', flex: 1 },
    btn: { padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
    table: { width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' },
    th: { textAlign: 'left', padding: '15px', background: '#f8fafc', borderBottom: '1px solid #eee' },
    td: { padding: '15px', borderBottom: '1px solid #eee' },
    deleteBtn: { padding: '5px 10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
  };

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      
      {/* Create Product Form */}
      <div style={styles.form}>
        <input 
          style={styles.input} 
          placeholder="Product Name" 
          value={newTitle} 
          onChange={e => setNewTitle(e.target.value)}
        />
        <input 
          style={styles.input} 
          placeholder="Price" 
          type="number"
          value={newPrice} 
          onChange={e => setNewPrice(e.target.value)}
        />
        <button style={styles.btn} onClick={handleAdd}>+ Add Product</button>
      </div>

      {/* Product List Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Image</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td style={styles.td}>{p.id}</td>
              <td style={styles.td}><img src={p.image} alt="" height="40" /></td>
              <td style={styles.td}>{p.title}</td>
              <td style={styles.td}>${p.price}</td>
              <td style={styles.td}>
                <button style={styles.deleteBtn} onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;