import React, { useContext, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComment.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  return (
    <div>
      <ul className={styles.comment}>
        {
          comments.map(comment => <li key={comment.comment_ID}>
            <b>{comment.commen_autor}:</b>
            <span>{comment.comment_content}</span>
          </li>)
        }
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </div>
  )
}

export default PhotoComments