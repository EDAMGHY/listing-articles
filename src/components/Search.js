import React from 'react';
import data from '../data/articles';

const Search = ({ setIsLoading, setArticles, search, setSearch }) => {
  const fetched = () => {
    const filtered = data.filter((d) => d.title.includes(search));
    setArticles(filtered);
    console.log(search);
    setIsLoading(true);
  };

  React.useEffect(() => {
    fetched();
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className='search-bar'>
      <div>
        <button type='button'>
          <i className='fas fa-search'></i>
        </button>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
        />
      </div>
    </div>
  );
};

export default Search;
