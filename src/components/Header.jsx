
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <nav className='nav'>
    //   <Link to='/' className="logo">
    //     Home
    //   </Link>
    //   <Link to='/playlists' className="nav-links">
    //     Your Playlists
    //   </Link>
    //   <Link to='/create-playlist' className="nav-links">
    //     Create a Playlist
    //   </Link>
    // </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

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
