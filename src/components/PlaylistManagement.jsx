import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import SearchResultsList from './SearchResultsList';

const PlaylistManagement = () => {
  const [playlists, setPlaylists] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState('');
  const [results, setResults] = useState([]);

  // Add a song to the active playlist
  const addSongToPlaylist = (song, {onAddToPlaylist}) => {
    if (activePlaylist) {
      const updatedPlaylist = [...activePlaylist, song];
      setActivePlaylist(updatedPlaylist);
    }
  };
  console.log(activePlaylist)

  return (
    <div>
      <h2>{activePlaylist ? activePlaylist.name : 'Select a Playlist'}</h2>

      <div>
        <h3>Your Playlist</h3>
        <ul>
          {activePlaylist &&
            activePlaylist.map((song) => (
              <li key={song.id}>{song.name}</li>
            ))}
        </ul>
      </div>

      <SearchBar onAddToPlaylist={addSongToPlaylist} setResults={setResults} />
      <SearchResultsList results={results} />
    </div>
  );
};

export default PlaylistManagement;