import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const results = await onSearch(newSearchTerm);
    setSearchResults(results);
  };

  const handleSearchClick = async () => {
    const results = await onSearch(searchTerm);
    setSearchResults(results);

    if (Array.isArray(results)) {
      setSearchResults(results);
    } else {
      // Handle the case where results is not an array (e.g., show an error message).
      console.error("Search results are not in the expected array format");
  
      // You can also set searchResults to an empty array or handle it differently.
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}> Search </button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.track}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
