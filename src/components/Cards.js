import React from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
const Cards = ({ articles, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='my-2'>
      {articles.map((article) => (
        <Card key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Cards;
