import { createContext, useState} from "react";

export const ContextName = createContext()

const NameProvider = ({children}) =>{
  const [name,setName] = useState('')
  return(
    <ContextName.Provider value={{name,setName}}>
      {children}
    </ContextName.Provider>
  )
}

export default NameProvider