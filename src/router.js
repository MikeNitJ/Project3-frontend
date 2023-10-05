import React, { createContext, useContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

// Create a context for authentication
export const AuthContext = createContext();

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to toggle the authentication status
  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="playlist"
            element={
              isAuthenticated ? <Playlist /> : <Login toggleAuth={toggleAuthentication} />
            }
          />
        </Route>
      </AuthContext.Provider>
    )
  );

  return router;
};

export default Router;
