import React from 'react';
import './SearchResult.css';

const SearchResult = ({ result, onAddToPlaylist }) => {
  const handleAddToPlaylist = () => {
    onAddToPlaylist(result); // Call the provided function to add the result to the playlist
  };

  return (
    <div className="search-result" onClick={handleAddToPlaylist}>
      {result.name}
      <button onClick={handleAddToPlaylist}>Add to Playlist</button>
    </div>
  );
};

export default SearchResult;
