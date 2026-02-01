import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Requires react-router-dom
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook to change pages

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/'); // Go to Home on success
    } else {
      alert('Invalid Credentials! Try admin@shophub.com / admin123');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 style={{marginBottom: '20px'}}>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input 
              type="email" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@shophub.com"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
            />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
        <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666'}}>
          Admin: admin@shophub.com | Pass: admin123
        </p>
      </div>
    </div>
  );
};

export default Login;