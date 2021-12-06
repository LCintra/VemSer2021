const INITIAL_STATE = {
  cep: '',
  cidade: '',
  complemento: '',
  estado: '',
  logradouro: '',
  pais: '',
  errors: false
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
      errors: action.errors,
      pais: action.pais
    }
  }
  return(state)
}

export default enderecoReducer