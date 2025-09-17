import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock user check - simulate checking for existing session
    const mockUser = localStorage.getItem('mockUser');
    if (mockUser) {
      setUser(JSON.parse(mockUser));
    }
    setLoading(false);

    // Return a cleanup function that does nothing since we're not using real Supabase auth
    return () => {};
  }, []);

  const signIn = async (email, password) => {
    // Mock authentication - simulate successful login
    if (email && password) {
      const mockUserData = {
        id: 'mock-user-id',
        email: email,
        username: email.split('@')[0] || 'User'
      };
      setUser(mockUserData);
      localStorage.setItem('mockUser', JSON.stringify(mockUserData));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signUp = async (email, password, username) => {
    // Mock sign up
    if (email && password && username) {
      const mockUserData = {
        id: 'mock-user-id',
        email: email,
        username: username
      };
      setUser(mockUserData);
      localStorage.setItem('mockUser', JSON.stringify(mockUserData));
    } else {
      throw new Error('Invalid registration data');
    }
  };

  const signOut = async () => {
    // Mock sign out
    localStorage.removeItem('mockUser');
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};