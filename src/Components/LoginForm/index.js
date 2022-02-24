import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input';
import Button from '../Button';
import Error from '../Error';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';
import styles from './LoginForm.module.css';
import styleBtn from '../Button/Button.module.css';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  console.log('error', error);

  async function handleSubmit(event) {
    event.preventDefault();

    // if (username.validar() && password.validar()) {
    if (password.validar()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <Error mensagem={error} />}
      </form>
      <Link className={styles.senha} to="/perdeu">Esqueceu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se.</p>
        <Link className={styleBtn.button} to="/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;