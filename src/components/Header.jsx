
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/' className="home-btn">
        Home
      </Link>
      <Link to='/playlist' className="playlist-btn">
        Playlist
      </Link>
    </nav>
  )
}

export default Header;
