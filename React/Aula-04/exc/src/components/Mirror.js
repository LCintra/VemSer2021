import { useContext } from "react";
import { ContextCount } from "../context/Count";
import { ContextName } from "../context/Name";
const Mirror = () =>{
  const {count,setCount} = useContext(ContextCount)
  const {name} = useContext(ContextName)
  return(
    <div>
      <h3>Espelho:{count}</h3>
      <button onClick={()=>{
        setCount(count-1)
      }}>Diminuir</button>
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Mirror;