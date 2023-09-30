import logo from './logo.svg';
import './App.css';
import axios from "axios";
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const searchSpotify = (query) => {
    const apiUrl = `https://api.spotify.com/v1/search?q=${query}&type=track`; 

    // Simulate an API call
    axios.get(apiUrl)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Spotify API:", error);
      });
  };

  
  return (
    <div className="App">
      <h1> Decibel </h1>
      <SearchBar onSearch={performSearch} />
      
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
