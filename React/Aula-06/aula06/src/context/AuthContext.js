import { createContext, useState } from "react";
import api from "../api";
import history from '../history'

const Context = createContext()

const AuthProvider = ({children}) =>{
  const [authenticated,setAuthenticated] = useState(false)
  const [loading,setLoading] = useState(true)

  async function handleLogin(){
    const {data:{token}} = await api.post('/authenticate')
    api.defaults.headers.Authorization = `Bearer ${token}`
    localStorage.setItem('token',JSON.stringify(token))
    history.push('/users')
    setAuthenticated(true)
  }
  return(
    <Context.Provider value={{authenticated,handleLogin}}>
      {children}
    </Context.Provider>
  );
}

export {Context,AuthProvider}