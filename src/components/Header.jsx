
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/' className="logo">
        Home
      </Link>
      <Link to='/playlist' className="nav-links">
        Playlist
      </Link>
    </nav>
  )
}

export default Header;
