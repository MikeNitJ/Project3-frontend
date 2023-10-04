import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

  return (
    <div className='home-container'>
        <h1 className='home-title'>Decibel</h1>
        <p className='home-description'>Welcome to Decibel, a music player app</p>
        <div className='home-button'>
          <button className='login-button'>
            <Link to='/login' className='login-btn'>
            Log In
            </Link>
          </button>
          <button className='signup-button'>
            <Link to='/signup' className='signup-link'>
            Sign Up
          </Link>
          </button>
        </div>

    </div>
  );
};

export default Home;
