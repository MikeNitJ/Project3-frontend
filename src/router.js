import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    Redirect,

  } from "react-router-dom"
  
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import { loginLoader, signupLoader } from "./loader"
import Home from "./pages/Home"
import { deleteAction, signInAction, signUpAction, updateAction } from "./action"
import Playlist from "./pages/MusicPage"
import UserPlaylists from "./components/UserPlaylists"
import CreatePlaylistForm from "./components/CreatePlaylistForm"
import PlaylistDetails from "./components/PlaylistDetails"
import PlaylistManagement from "./components/PlaylistManagement"


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} />
        <Route path="/login" element={<Login/>}  />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/playlist" element={<Playlist/>}  />
        <Route path="/playlists" element={<UserPlaylists/>} component={UserPlaylists}  />
        <Route path="/playlists/:id" element={<PlaylistManagement/>} component={<PlaylistManagement/>}  />
        <Route path="/create-playlist" element={<CreatePlaylistForm />}  />
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        

        {/* <Route path="/login" element={<Login/>} loader={loginLoader} /> */}
        {/* <Route path="/signup" element={<Signup/>} loader={signupLoader}/> */}
    </Route>
    )
  )

export default router