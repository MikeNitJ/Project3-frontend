import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import SearchResultsList from './SearchResultsList';
import SearchResult from './SearchResult';
import PlaylistDetails from './PlaylistDetails';

const PlaylistManagement = ({ onAddToPlaylist}) => {
  const { playlistId } = useParams();
  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlist, setPlaylist] = useState([]);


  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };

  // Fetch the playlist name based on playlistId
  useEffect(() => {
    const fetchPlaylistName = async () => {
      try {
        const response = await fetch(`http://localhost:3040/playlists/${playlistId}`);
        if (response.ok) {
          const data = await response.json();
          setPlaylistName(data.name);
          setPlaylist(data.songs); // Assuming your playlist object has a "songs" property
        } else {
          console.error('Failed to fetch playlist name');
        }
      } catch (error) {
        console.error('Error fetching playlist name:', error);
      }
    };

    if (playlistId) {
      fetchPlaylistName();
    }
  }, [playlistId]);

  return (
    <div>
      <div>
          <h2>songs</h2>
        <ul>
          {playlist.map((song) => (
            <li key={song.id}>{song.name}</li>
          ))}
        </ul>
      </div>

      <PlaylistDetails  />
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} onAddToPlaylist={addToPlaylist} />

    </div>
  );
};

export default PlaylistManagement;