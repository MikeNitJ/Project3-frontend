import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";



function App() {
const handleSearch = async (query) => {
  try {
    const response = await fetch(`/search?q=${query}`);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      return [];
    }

  } catch (error) {
    console.error('error searching for song:', error);
    return [];
  }
}
 

  return (
    <div className="App">
      <Header/>
      <h1> Decibel </h1>
      <SearchBar onSearch={handleSearch} />
      <Outlet/>
      
      

    </div>
  );
}
export default App;
