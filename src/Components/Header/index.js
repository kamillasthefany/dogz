import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { Container, Nav } from './styles';
import styles from './Header.module.css';
import st from '../../styles.css';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {

  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={st.container}>
        <div className={styles.nav}>
          <Link to="/" aria-label='Dogz - Home' style={styles.log}><Dogs /></Link>
          {data ?
            (
              <Link to="/conta" className={styles.login}>
                {data.nome}
              </Link>
            )
            :
            (<Link to="/login" className={styles.login}>Login</Link>)
          }

        </div>
      </nav>
    </header >
  )
};

export default Header;
