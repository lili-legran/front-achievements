import React from 'react';
import loadingImg from '../../assets/download.png';
import './loading.scss';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={ loadingImg } className='loading__img' alt='download' />
    </div>
  );
};

export default Loading;
