import React from 'react';
import data from '../data/articles';
const Search = ({ setIsLoading, setArticles, search, setSearch }) => {
  const fetched = () => {
    setIsLoading(true);
    const filtered = data.filter((d) => {
      if (search === '') return d;
      else if (d.title.toLowerCase().includes(search.toLowerCase())) return d;
      return null;
    });
    setArticles(filtered);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (search !== '') {
      setIsLoading(false);
      fetched();
    } else {
      setIsLoading(true);
      setArticles([]);
    }
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
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
        />
      </div>
    </div>
  );
};

export default Search;
