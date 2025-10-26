import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (password: string) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    if (email && password) {
      const nameParts = email.split('@')[0].split('.');
      const userData: User = {
        name: email.split('@')[0],
        email: email,
        firstName: nameParts[0] || 'User',
        lastName: nameParts[1] || '',
        address: ''
      };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration - in real app, this would call an API
    if (name && email && password) {
      const nameParts = name.split(' ');
      const userData: User = {
        name: name,
        email: email,
        firstName: nameParts[0] || name,
        lastName: nameParts.slice(1).join(' ') || '',
        address: ''
      };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const resetPassword = async (password: string): Promise<boolean> => {
    // Mock reset password - in real app, this would call an API
    if (password) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout, resetPassword, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
