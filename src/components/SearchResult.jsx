import React from 'react';

const SearchResult = ({ result, onAddToPlaylist }) => {
  const handleAddToPlaylist = () => {
    onAddToPlaylist(result); // Call the provided function to add the result to the playlist
  };

  return (
    <div className="search-result" onClick={handleAddToPlaylist} style={{padding: ".5px"}}>
      {result.name}
      <button onClick={handleAddToPlaylist} style={{padding: ".5px"}}> Add to Playlist </button>
    </div>
  );
};

export default SearchResult;
