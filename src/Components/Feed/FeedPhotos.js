import React, { useEffect } from 'react'
import Error from '../Error';
import Loading from '../Loading';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options);
      console.log('json', json);
    }
    fetchPhoto();

  }, [request]);

  if (error) return <Error message={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}

      </ul>
    )
  else return null;
}

export default FeedPhotos