import React, { Fragment, useState } from 'react';
import Search from './components/Search';
import Cards from './components/Cards';

import './index.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = React.useState('');
  console.log(articles);

  return (
    <div className='container'>
      <Fragment>
        <Search
          articles={articles}
          setArticles={setArticles}
          search={search}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
        <Cards articles={articles} isLoading={isLoading} />
      </Fragment>
    </div>
  );
}

export default App;
