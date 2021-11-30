import React from 'react';

const Card = ({ title, description, badge }) => {
  return (
    <div className='card'>
      <div className='image-body'>
        <img src='https://source.unsplash.com/random/300x175' alt='random' />
        <span className='badge'>{badge}</span>
      </div>
      <div className='card-body'>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href='/' className='btn'>
          Lire Plus
        </a>
      </div>
    </div>
  );
};

export default Card;
