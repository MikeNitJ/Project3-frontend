import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

const MusicPage = () => {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  const removeFromPlaylist = (track) => {
    const updatedPlaylist = playlist.filter((item) => item.id !== track.id);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="App">
      <div className="playlistcontainer">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} onAddToPlaylist={addToPlaylist} />
      </div>

      <div className="playlistcontainer2">
        <h2>Playlist</h2>
        {playlist.map((track) => (
          <div
            key={track.id}
            className="playlist-track"
            onClick={() => removeFromPlaylist(track)}
          >
            {track.name}
            <button onClick={() => removeFromPlaylist(track)} style={{padding: ".5px"}}> Remove </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
