import React, { useEffect } from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';

function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();


  useEffect(() => {
    if (photo?.id) {
      console.log('u')
      const { url, options } = PHOTO_GET(photo.id);
      request(url, options);
    }


  }, [photo, request]);

  return (
    <div className={styles.modal}>
      modal
    </div>
  )
}

export default FeedModal