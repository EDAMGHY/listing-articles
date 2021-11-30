import React from 'react';
import loadingImage from '../resources/preloader.gif';
const Loading = () => {
  return (
    <div className='center'>
      <img src={loadingImage} alt='loading' />;
    </div>
  );
};

export default Loading;
