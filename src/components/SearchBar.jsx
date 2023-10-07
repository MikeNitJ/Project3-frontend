import React from "react";
import { useState, useEffect } from "react";
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");


  const fetchData = (value) => {
    const accessToken = 'BQCeOys2plCKEpdUqRGSnoymbNGWNpV1aoYYLpl9Ae8n5NJi8aAnElm4OK0eleftFLvSjgnCFyr1sAv2BmJguHnr37ByrMJeJZf-Pwi_6j5aUOiS20E'
    
    fetch(`https://api.spotify.com/v1/search?q=${value}&type=track`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('no work')
      }
      return response.json();
    })
    .then((json) => {
      console.log(json)

      const tracks = json.tracks.items;
      console.log(tracks)

      const results = tracks.filter((track) => {
        return track && track.name
      });
      setResults(results)
    })
      .catch((error) => {
        console.error('error:', error)
      })

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