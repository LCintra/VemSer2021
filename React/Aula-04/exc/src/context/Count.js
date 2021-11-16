import { createContext, useState} from "react";

export const ContextCount = createContext()

const CountProvider = ({children}) =>{
  const [count,setCount] = useState(0)
  return(
    <ContextCount.Provider value={{count,setCount}}>
      {children}
    </ContextCount.Provider>
  )
}

export default CountProvider;