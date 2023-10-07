import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState({});
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate()

  useEffect(() => {

    const fetchPlaylistDetails = async () => {
      const response = await fetch(`http://localhost:3040/playlists/${playlistId}`);
      if (response.ok) {
        const data = await response.json();
        setPlaylist(data);
        setName(data.name);
        setImageUrl(data.imageUrl);
      }
    };

    fetchPlaylistDetails();
  }, [playlistId]);
  console.log(playlistId)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUpdatePlaylist = async (e) => {
    e.preventDefault();

    // put request
    const response = await fetch(`http://localhost:3040/playlists/${playlistId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, imageUrl }),
    });

    if (response.ok) {
        navigate ('/playlists')
    } else {
        console.error('error')
    }
  };



const handleDeletePlaylist = async () => {
  // Send a DELETE request to delete the playlist
  const response = await fetch(`http://localhost:3040/playlists/${playlistId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
  },
  'credentials': 'include',
  });

  console.log(playlistId)
  if (response.ok) {
    navigate ('/playlists')
  } else {
    console.error('error')
  }
};

  return (
    <div>
      <h1>{playlist.name}</h1>
      <form onSubmit={handleUpdatePlaylist}>
        <div>
          <h4><label htmlFor="name" >Name:</label></h4>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <h4><label htmlFor="imageUrl">Image URL:</label></h4>
          <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
        </div>
        <button type="submit">Update Playlist</button>
      </form>
      <button onClick={handleDeletePlaylist}>Delete Playlist</button>
    </div>
  );
};

export default PlaylistDetails;