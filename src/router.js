import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import { loginLoader, signupLoader } from "./loader"
import Home from "./pages/Home"
import { signInAction, signUpAction } from "./action"

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} />
        <Route path="/login" element={<Login/>} action={signInAction} />
        <Route path="/signup" element={<Signup/>} action={signUpAction}/>
        {/* <Route path="/login" element={<Login/>} loader={loginLoader} /> */}
        {/* <Route path="/signup" element={<Signup/>} loader={signupLoader}/> */}
    </Route>
    )
  )


  export default router