import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

import Login from "./pages/Login"
import Pessoa from "./pages/Pessoa"
import {AuthProvider} from './context/AuthContext'
import Home from "./pages/Home"

const Routers = () =>{
  return(
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/pessoa" element={<Pessoa/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers