import api from '../../api'
export const handleLogin = async (user,dispatch) => {
  const {data} = await api.post('/auth',user)
  if(data){
    console.log(data)
    localStorage.setItem('token',data)
    api.defaults.headers.common['Authorization'] = data
    window.location.href = '/pessoa'
    const logado = {
      type: 'SET_LOGIN',
      token:data,
      auth:true,
      loading:false
    }
    dispatch(logado)
  } else{
    alert('Deu erro no login')
  }
}

export const handleLogout = (dispatch) =>{
  localStorage.removeItem('token')
  api.defaults.headers.common['Authorization'] = ''
  window.location.href = '/'
  const deslogado = {
    type: 'SET_LOGOUT',
    auth:false
  }
  dispatch(deslogado)
}

export const handleLoading = (dispatch) => {
  const loading = {
    type: 'SET_LOADING',
    loading:false
  }
  dispatch(loading)
}

export const handleAuth = (dispatch) => {
  const auth = {
    type: 'SET_AUTH',
    auth:true
  }
  dispatch(auth)
}

export const handleIsLogin = (dispatch) =>{
  const isLogin = {
    type: 'SET_ISLOGIN',
    isLogin: true
  }
  dispatch(isLogin)
}