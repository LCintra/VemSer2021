const Personal = ({nome,idade,profissao,src}) =>{
  return(
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      <img src={src}></img>
    </div>
  );
}

export default Personal;