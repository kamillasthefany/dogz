import React, { useState } from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';


const Feed = () => {

  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      <FeedModal photo={modalPhoto} />
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed