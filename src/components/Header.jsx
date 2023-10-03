import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <a href="/"> Home </a>
      </div>
      <div className="nav-links">
        <a href="/login"> Log In </a>
        <a href="/signup"> Sign Up </a>
      </div>
    </div>
  );
};

export default Header;
