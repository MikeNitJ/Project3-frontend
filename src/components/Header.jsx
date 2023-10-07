
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/' className="logo">
        Home
      </Link>
      <Link to='/playlists' className="nav-links">
        Your Playlists
      </Link>
      <Link to='/create-playlist' className="nav-links">
        Create a Playlist
      </Link>
    </nav>
  )
}

export default Header;
