import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {

  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const usuario = await response.json();

    setUser(usuario);
    setLogin(true);

    console.log('log context', usuario);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenResposta = await fetch(url, options);
    const { token } = await tokenResposta.json();
    window.localStorage.setItem('token', token);

    getUser(token);

  }

  return (
    <UserContext.Provider value={{ userLogin, user }}>
      {children}
    </UserContext.Provider>
  )
}
