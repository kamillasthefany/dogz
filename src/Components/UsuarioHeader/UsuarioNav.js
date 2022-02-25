import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UsuarioNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UsuarioNav = () => {

  const [menuMobile, setMenuMobile] = useState(false);
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');

  const [pathname] = useLocation();

  useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile &&
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${menuMobile && styles.mobileButtonActive}`}
          onClick={() => setMenuMobile(!menuMobile)}
        >
        </button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${menuMobile && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar"><Adicionar /> {mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={userLogout}><Sair /> {mobile && 'Sair'}</button>
      </nav>
    </>
  )
}

export default UsuarioNav