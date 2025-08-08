import { useState, useEffect } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) setUser(JSON.parse(raw));
  }, []);
  const login = (token, userObj) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userObj));
    setUser(userObj);
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };
  return { user, login, logout };
}