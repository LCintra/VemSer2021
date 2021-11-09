import Item from "./Item"
const List = () =>{
  return(
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari"/>
        <Item marca="Fiat"/>
        <Item marca="Renault"/>
      </ul>
    </>
  )
}

export default List