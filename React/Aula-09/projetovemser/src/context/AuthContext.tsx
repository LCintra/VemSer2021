import React, {createContext, useState, useEffect} from "react";
import api from "../api";

const AuthContext = createContext({});

interface LoginDTO {
  usuario: string;
  senha: string;
}

const AuthProvider: React.FC<any> = ({ children }) =>{

  useEffect(() =>{
      
  },[])  

  const handleLogin = async(user: LoginDTO) =>{
    const {data} = await api.post('/auth',user)
    console.log(data)
  }

  const [auth,setAuth] = useState(false)
  return(
    <AuthContext.Provider value={{ auth,handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext,AuthProvider}