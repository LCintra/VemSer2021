import { useState } from 'react'
function Form() {
  const [nome,setNome] = useState('')
  const [listUser,setListUser] = useState([])
  let id = 1
  function CadastraUsuario(e) {
    e.preventDefault()
    const item = listUser.push({nome:nome,id:id})
    setListUser(item)
    id++;
  }
  return(
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={CadastraUsuario}>
        <div>
          <input onChange={(e) => {setNome(e.target.value)}} type="text" placeholder="Digite o seu nome"></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
      <div>
          {listUser.map(user =>(
              <p key={user.id}>{user.nome}</p>
          ))}
      </div>
    </>
  );
}

export default Form;