import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePlaylistForm = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate(); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3040/create-playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      'credentials': 'include',
      body: JSON.stringify({ name, imageUrl }),
    });

    if (response.ok) {
      const data = await response.json();
      // ._id is from mongo 
      navigate(`/playlists`);
    } else {
      console.error('error man')
    }
  };

  return (
    <div>
      <h2>Create a Playlist</h2>
      <form onSubmit={handleCreatePlaylist}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
        </div>
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
}
export default CreatePlaylistForm