/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from 'react';
import api from '../api/axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const login = useCallback(async (userData, token = null) => {
    if (token) {
      localStorage.setItem('token', token);
      setUser(userData ?? null);
      return userData;
    }

    if (userData && typeof userData === 'object' && ('email' in userData || 'password' in userData)) {
      const { data } = await api.post('/login', userData);
      localStorage.setItem('token', data.token);
      setUser(data.user);
      return data.user;
    }

    if (userData) {
      setUser(userData);
      return userData;
    }

    return null;
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get('/user');
        setUser(data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};