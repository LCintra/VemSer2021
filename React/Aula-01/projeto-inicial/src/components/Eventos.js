function Eventos(props) {
  function meuEvento(num) {
    console.log(`Opa fui clicado ${num}`)
  }
  const nome = 'tiaguinho'
  const numero = props.calc(2)
  function Teste(){
    return 'teste'
  }
  return(
    <>
      <p>Numero: {numero}</p>
      <button onClick={() => meuEvento(props.num)}>Ativar</button>
    </>
  );
} 

export default Eventos;