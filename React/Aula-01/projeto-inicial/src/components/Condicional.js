import {useState} from 'react';
function Condicional(){
  const [email,setEmail] = useState();
  const [userEmail,setUserEmail] = useState()
  function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email);
  }
  function limparEmail(){
    setEmail('')
    setUserEmail('')
  }
  return(
    <>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail"></input>
        <button onClick={enviarEmail} type="submit">Enviar E-mail</button>
      </form>
      {userEmail && (
        <div>
          <p>o email do usuário é {email}</p>
          <button onClick={limparEmail}>Limpar E-mail</button>
        </div>
      )}
    </>
  );
}

export default Condicional;