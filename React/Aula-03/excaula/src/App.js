import { useState } from "react";
import "./App.css";
import UsuarioCard from "./components/UsuarioCard/UsuarioCard";
import FormInput from "./components/FormInput/FormInput";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (nome && email && profissao) {
      let id = 1;
      id = usuarios.length
      setUsuarios([
        ...usuarios,
        { id: id, nome: nome, email: email, profissao: profissao },
      ]);
    } else{
      alert('Há campos não preenchidos')
    }
  };
  const removerUsuario = (e) => setUsuarios(usuarios.filter(usuario => usuario.id !== Number(e.target.parentNode.id)))
  return (
    <>
      <div className="App">
        <div className="container">
          <form onSubmit={cadastrarUsuario}>
            <FormInput placeholder="Nome" onChange={(e) => setNome(e.target.value)} type="text"/>
            <FormInput placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="text"/>
            <FormInput placeholder="Profissão" onChange={(e) => setProfissao(e.target.value)} type="text"/>
            <input type="submit" value="Adicionar Usuario"></input>
          </form>
          <div>
            <ul>
              {usuarios.map((usuario) => {
                return (
                  <UsuarioCard key={usuario.id} id={usuario.id} nome={usuario.nome} email={usuario.email} profissao={usuario.profissao} remover={removerUsuario}/>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
