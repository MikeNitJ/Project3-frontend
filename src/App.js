import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
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
    <div className="App">
      <h1> Decibel </h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
export default App;
