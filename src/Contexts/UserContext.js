import React, { createContext, useState, useEffect } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {

  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function userLogout() {
    setUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const usuario = await response.json();

    setUser(usuario);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResposta = await fetch(url, options);
      if (!tokenResposta.ok) throw new Error(`Error: ${tokenResposta.statusText}`);
      const { token } = await tokenResposta.json();
      window.localStorage.setItem('token', token);

      await getUser(token);
    }
    catch (error) {
      console.log('erro contexto', error);
      setError(error);
      setLogin(false);
    }
    finally {
      setLoading(false);
    }


  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, error, login, loading, user }}>
      {children}
    </UserContext.Provider>
  )
}
