import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";



function App() {
 

  return (
    <div className="App">
      <Header/>
      <h1> Decibel </h1>
      
      <Outlet/>
      
      

    </div>
  );
}
export default App;
