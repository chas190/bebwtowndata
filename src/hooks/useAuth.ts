import { useState, useEffect } from 'react';
import userData from '../data/users.json';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  title: string;
  group: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : { user: null, isAuthenticated: false };
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(authState));
  }, [authState]);

  const login = (identifier: string, password: string): boolean => {
    const user = userData.users.find(
      u => (u.email === identifier || u.username === identifier) && u.password === password
    );

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      setAuthState({ user: userWithoutPassword, isAuthenticated: true });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false });
    window.location.href = '/logout';
  };

  return { ...authState, login, logout };
};