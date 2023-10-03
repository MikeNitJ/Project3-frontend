import React from "react";
import { useState } from "react";

// const handleSearch = async (query) => {
//   try {
//     const response = await fetch(`/search?q=${query}`);
//     if (response.ok) {
//       const data = await response.json();
//       return data.results;
//     } else {
//       return [];
//     }

//   } catch (error) {
//     console.error('error searching for song:', error);
//     return [];
//   }
// }

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  

  const results = await onSearch(searchTerm);
    setSearchResults(results || []);
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit"> 
        Search
      </button>

      {Array.isArray(searchResults) && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.track}</li>
          ))}
        </ul>
      ) : null}
    </form>
  );
};

export default SearchBar;
