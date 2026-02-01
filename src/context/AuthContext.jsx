import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // HARDCODED ADMIN CREDENTIALS
    if (email === 'admin@shophub.com' && password === 'admin123') {
      setUser({ email, name: 'Admin User', role: 'admin' });
      return true;
    } 
    // HARDCODED NORMAL USER
    else if (email === 'user@test.com' && password === 'user123') {
      setUser({ email, name: 'John Doe', role: 'user' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);