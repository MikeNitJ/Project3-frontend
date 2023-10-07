import React, { useState, useEffect } from 'react';

const UserPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
    // Fetch user playlists from your backend route
    const fetchPlaylists = async () => {
      const response = await fetch('http://localhost:3040/playlists');
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        setPlaylists(data);

    }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
      {playlists.map((playlist) => (
          <li key={playlist._id}>
            <a href={`/playlists/${playlist._id}`}>{playlist.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPlaylists;