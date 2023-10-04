import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    navigate('/login');
    return null; // Render nothing while redirecting
  }

  // If the user is authenticated, render the protected route
  return <Route {...rest} />;
};

export default PrivateRoute;
