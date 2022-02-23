import React from 'react';
import { Link } from 'react-router-dom';
// import { Container, Nav } from './styles';
import styles from './Header.module.css';
import st from '../../styles.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={st.container}>
        <div className={styles.nav}>
          <Link to="/" aria-label='Dogz - Home' style={styles.log}><Dogs /></Link>
          <Link to="/login" className={styles.login}>Login</Link>
        </div>
      </nav>
    </header >
  )
};

export default Header;
