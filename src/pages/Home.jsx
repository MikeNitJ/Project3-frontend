import React from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const handleSearch = async (query) => {
    const response = await fetch(`/search?q=${query}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      return [];
    }
  };
  return (
    <div>
      This is Home page
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Home;
