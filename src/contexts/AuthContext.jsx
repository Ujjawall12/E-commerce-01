import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const checkUserExists = (email) => {
    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    return existingUsers.some(user => user.email === email);
  };

  const signup = (userData) => {
  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    login(userData);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, signup, checkUserExists }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


