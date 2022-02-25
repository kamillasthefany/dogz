import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UsuarioHeader from '../../Components/UsuarioHeader';
import Feed from '../../Components/Feed';
import UsuarioFotoPost from '../../Components/UsuarioFotoPost';
import UserStats from '../../Components/UserStats';

const Usuario = () => {
  return (
    <section className='container'>
      <UsuarioHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UsuarioFotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default Usuario;