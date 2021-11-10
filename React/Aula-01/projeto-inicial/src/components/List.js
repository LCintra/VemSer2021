import Item from "./Item"
const List = () =>{
  return(
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item menu="Home"/>
        <Item menu="Sobre" url={20}/>
        <Item menu="Contato" url={40}/>
      </ul>
    </>
  )
}

export default List