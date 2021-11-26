import React, {createContext,ReactNode,useState} from "react"
import { PessoasDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  listPessoas:Array<PessoasDTO>;
  setListPessoas:React.Dispatch<React.SetStateAction<Array<PessoasDTO>>>;
  editMode: boolean;
  setEditMode:(value: boolean) => void;
  pessoaEditar:PessoasDTO;
  setPessoaEditar:React.Dispatch<React.SetStateAction<PessoasDTO>>;
}


const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{
  const [listPessoas,setListPessoas] = useState<Array<PessoasDTO>>([])
  const [editMode,setEditMode] = useState(false)
  const [pessoaEditar,setPessoaEditar] = useState({} as PessoasDTO)

  return(
    <PessoaContext.Provider value={{listPessoas,setListPessoas,editMode,setEditMode,pessoaEditar,setPessoaEditar}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext,PessoaProvider}
