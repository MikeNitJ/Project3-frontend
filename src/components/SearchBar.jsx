import React from "react";
import { useState, useEffect } from "react";
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({setResults}) => {
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

      const tracks = json.tracks.items;
      console.log(tracks)

      const results = tracks.filter((track) => {
        return track && track.name.toLowerCase().includes(value)
      });
      setResults(results)
    });
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }


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