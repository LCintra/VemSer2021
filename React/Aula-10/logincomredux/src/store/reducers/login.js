const INITIAL_STATE = {
  auth:false,
  token:'',
  loading:true,
  isLogin:false
}

function loginReducer(state = INITIAL_STATE,action){
  if(action.type === 'SET_LOGIN'){
    return{
      ...state,
      auth:action.auth,
      token:action.token,
      loading:action.loading
    }
  }

  if(action.type === 'SET_LOGOUT'){
    return{
      ...state,
      auth:action.auth
    }
  }

  if(action.type === 'SET_LOADING'){
    return{
      ...state,
      loading:action.loading
    }
  }

  if(action.type === 'SET_AUTH'){
    return{
      ...state,
      auth:action.auth
    }
  }
  return state
}

export default loginReducer