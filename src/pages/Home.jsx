
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <div>
        <h1>Decibel</h1>
        <p>Welcome to Decibel, a music player app</p>
        <div className='home-button'>
          <button><Link to='/login' className='login-btn'>
            Log In
          </Link></button>
          <button><Link to='/signup' className='signup-btn'>
            Sign Up
          </Link></button>
        </div>

    </div>
  );
};

export default Home;
