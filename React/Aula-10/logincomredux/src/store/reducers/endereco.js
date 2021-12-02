const INITIAL_STATE = {
  cep: '',
  cidade: '',
  complemento: '',
  estado: '',
  logradouro: '',
  pais: '',
}

function enderecoReducer(state = INITIAL_STATE,action){
  if(action.type === 'SET_ENDERECO'){
    return{
      ...state,
      cep: action.cep,
      cidade: action.cidade,
      complemento: action.complemento,
      estado: action.estado,
      logradouro: action.logradouro,
      pais: 'Brasil'
    }
  }
  return(state)
}

export default enderecoReducer