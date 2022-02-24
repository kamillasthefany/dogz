import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input';
import Button from '../Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  console.log('loadgin', error);

  async function handleSubmit(event) {
    event.preventDefault();

    // if (username.validar() && password.validar()) {
    if (password.validar()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>Erro</p>}
      </form>
      <Link to="/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;