import React, { useState } from 'react';
import { COMMENT_POST } from '../../api';
import Error from '../../Components/Error';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import styles from './PhotoCommenstForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {

  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json, error } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
    console.log(response);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        className={styles.textarea}
        placeholder='Escreva um comentário'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button} ><Enviar /></button>
      {console.log('error', error)}
      {error && <Error mensagem={error?.mensagem} />}
    </form>
  )
}

export default PhotoCommentsForm