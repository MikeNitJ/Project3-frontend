import React from 'react';
import SearchResult from './SearchResult';

const SearchResultsList = ({ results, onAddToPlaylist }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} onAddToPlaylist={onAddToPlaylist} />;
      })}
    </div>
  );
};

export default SearchResultsList;
