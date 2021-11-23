import React, { createContext, useState } from 'react'

interface ICard{
    login: string;
    avatar_url:string;
    html_url:string;
    repos_url:string;
    email:string | null;
    created_at:string;
    followers:number;
}

interface IContext{
  usuario:ICard;
  setUsuario:React.Dispatch<React.SetStateAction<ICard>>
}

const CardContext = createContext<IContext>({} as IContext)

function CardProvider({children}:any){
  const [usuario,setUsuario] = useState<ICard>({} as ICard)
  return(
    <CardContext.Provider value={{usuario,setUsuario}}>
      {children}
    </CardContext.Provider>
  )
}

export {CardContext,CardProvider}