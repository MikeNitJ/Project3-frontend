import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";



function App() {
 

  return (
    <div className="App">
      <Header/>
      <img src="/D.png" alt="homeLogo" />
      
      <Outlet/>
      
      

    </div>
  );
}
export default App;
