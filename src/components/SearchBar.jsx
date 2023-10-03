import React from "react";
import { useState, useEffect } from "react";
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = () => {
  const [input, setInput] = useState("");


  const fetchData = (value) => {
    const accessToken = 'BQDVWr-sFU0a2RBCpETpamVE1yn8x-OE42Agc42AyvcaEYy5X06krcuoz2mQtoFWuOa2Oeg1IRJgisTe0M6tYsXsWiiQv-NRNfP0IUzcnedjEdLO9Z0'
    
    fetch(`https://api.spotify.com/v1/search?q=${value}&type=track`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    });
  }


  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

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

    <div className="input-wrapper">
      <FaSearch id='search-icon' />
      <input 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}/>

    </div>
);
}

export default SearchBar;