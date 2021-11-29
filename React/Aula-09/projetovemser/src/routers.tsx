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
import { PessoaProvider } from "./context/PessoaContext"
import { useEffect, useState } from "react"
import NotFound from "./components/NotFound"
import Endereco from "./pages/Endereco"

const Routers = () =>{
  const [isLogin, setIsLogin] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setIsLogin(true)
    }
  },[])
  return(
    <BrowserRouter>
      <AuthProvider>
        <PessoaProvider>
          <Header/>
          {isLogin
          ?           
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/pessoa" element={<Pessoa/>}/>
            <Route path="/endereco" element={<Endereco/>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes> 
          :           
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>}
          <Footer/>
        </PessoaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers