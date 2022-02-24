import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCreate from '../../Components/LoginCreate';
import PasswordLost from '../../Components/PasswordLost';
import PasswordReset from '../../Components/PasswordReset';
import LoginForm from '../../Components/LoginForm';
import { UserContext } from '../../Contexts/UserContext';
import styles from './Login.module.css';

const Login = () => {

  const { login } = useContext(UserContext);
  console.log('login', login);

  if (login) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<PasswordLost />} />
          <Route path="resetar" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  )


}

export default Login;