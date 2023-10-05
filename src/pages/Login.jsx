import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../router'; // Use '../router' to go up one directory

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Access the AuthContext to get the isAuthenticated value and toggleAuthentication function
  const { isAuthenticated, toggleAuthentication } = useContext(AuthContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:3040/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log('User authenticated:', credentials);
        // Toggle authentication status on successful login
        toggleAuthentication();
        navigate("/");
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        {/* Your form input elements */}
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};

export default Login;
