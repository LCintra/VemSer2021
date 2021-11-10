import PropTypes from 'prop-types'
const UsuarioCard = ({nome,id,email,profissao,remover}) =>{
  return(
    <>
      <li id={id}>
        <h2>{`Usuario: ${nome}`}</h2>
        <p>{`E-mail: ${email}`}</p>
        <p>{`Profissão: ${profissao}`}</p>
        <button onClick={remover}>Remover</button>
      </li>
    </>
  );
}

UsuarioCard.propTypes = {
  nome: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  profissao: PropTypes.string.isRequired,
  remover:PropTypes.func.isRequired
}

export default UsuarioCard;