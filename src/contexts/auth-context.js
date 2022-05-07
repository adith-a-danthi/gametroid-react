import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const authInitailState = { isAuthenticated: false, user: undefined };

const AuthProvider = ({ children }) => {
  const [authState, setAuth] = useState(authInitailState);

  const login = ({ user, token }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuth({ isAuthenticated: true, user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth(authInitailState);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if (token && userString) {
      setAuth({ isAuthenticated: true, user: JSON.parse(userString) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
