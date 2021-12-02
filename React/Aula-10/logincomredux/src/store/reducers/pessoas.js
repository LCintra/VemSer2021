const INITIAL_STATE = {
  pessoas: [],
  pessoaEditar:{},
  editMode:false,
  listLoading: true
}

function pessoasReducer(state = INITIAL_STATE,action){
  if(action.type === 'GET_PESSOAS'){
    return{
      ...state,
      pessoas: action.pessoas
    }
  }

  if(action.type === 'SET_EDITMODE'){
    return{
      ...state,
      editMode: action.editMode
    }
  }

  if(action.type === 'SET_EDITPERSON'){
    return{
      ...state,
      pessoaEditar: action.pessoaEditar
    }
  }

  if(action.type === 'SET_LISTLOADING'){
    return{
      ...state,
      listLoading: action.listLoading
    }
  }
  return state
}

export default pessoasReducer