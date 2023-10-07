
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/playlist">Playlist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/create-playlist">Create Playlists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/playlists/:id">Your Playlists</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Header;
