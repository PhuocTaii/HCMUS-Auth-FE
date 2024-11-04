import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
import SignUp from "./pages/SignUp"
import AuthLayout from "./layout/AuthLayout"
import Home from "./pages/Home"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    // <>
    //   <Login></Login>
    // </>
    <Router>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path = "/" element = {<Login></Login>}></Route>
          <Route path = "/signup" element = {<SignUp></SignUp>}></Route>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/home" element = {<Home></Home>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
