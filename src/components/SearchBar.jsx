import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchResults(newSearchTerm);

    const results = await onSearch(newSearchTerm);
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.track}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
