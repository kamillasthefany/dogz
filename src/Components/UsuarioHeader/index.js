import React, { useState, useEffect } from 'react'
import UsuarioNav from './UsuarioNav';
import styles from './Usuario.module.css';
import { useLocation } from 'react-router-dom';

const UsuarioHeader = () => {

  const [title, setTitle] = useState();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    console.log('pah', pathname);
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }

  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UsuarioNav />
    </header>
  )
}

export default UsuarioHeader;