const OutraLista = ({itens}) =>{
  return(
    <>
      <h3>Lista de Tecnologias</h3>
      {itens.length ? (itens.map(item =>(
        <div key={item.id}>
          <p>{item.nome}</p>
          <p>{item.idade}</p>
        </div>
      ))) : <h2>Lista Vazia</h2>}
    </>
  );
}

export default OutraLista;