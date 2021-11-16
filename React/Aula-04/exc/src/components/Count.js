import { useContext } from "react";
import { ContextCount } from "../context/Count";
import { ContextName } from "../context/Name";

const Count = () =>{
  const {count,setCount} = useContext(ContextCount)
  const {name,setName} = useContext(ContextName)
  return(
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>Aumentar</button>
      <form>
        <label name="nome">Insira um nome:</label>
        <input onChange={(e)=>{
          e.preventDefault()
          setName(e.target.value)
        }} name="nome" type="text"/>
      </form>
      <p>
        {name}
      </p>
    </div>
  )
}

export default Count;
