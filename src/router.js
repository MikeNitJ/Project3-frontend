import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
console.log("HELLO");

const isAuthenticated = false;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/playlist"
        element={isAuthenticated ? (<Playlist/>) : (<Login />)}
      />
    </Route>
  )
);

export default router;
