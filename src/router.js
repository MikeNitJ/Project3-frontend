import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Redirect,
  } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import { loginLoader, signupLoader } from "./loader"
import Home from "./pages/Home"
import { signInAction, signUpAction } from "./action"
import Playlist from "./pages/Playlist"

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} />
        <Route path="/login" element={<Login/>} action={signInAction} />
        <Route path="/signup" element={<Signup/>} action={signUpAction}/>
        <Route path="/playlist" element={<Playlist/>}  />
        {/* <Route path="/login" element={<Login/>} loader={loginLoader} /> */}
        {/* <Route path="/signup" element={<Signup/>} loader={signupLoader}/> */}
    </Route>
    )
  )


  export default router