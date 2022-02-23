import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginCreate from '../../Components/LoginCreate';
import PasswordLost from '../../Components/PasswordLost';
import PasswordReset from '../../Components/PasswordReset';
import LoginForm from '../../Components/LoginForm';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<PasswordLost />} />
        <Route path="resetar" element={<PasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login;