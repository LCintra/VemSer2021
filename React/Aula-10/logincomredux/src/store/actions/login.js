import api from '../../api'
export const handleLogin = async (user,dispatch) => {
  try {
    const {data} = await api.post('/auth',user)
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
  } catch (error) {
    alert('Usuário ou Senha Incorretos')
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
  handleLoading(true,dispatch)
  dispatch(deslogado)
}

export const handleLoading = (mode,dispatch) => {
  const loading = {
    type: 'SET_LOADING',
    loading: mode
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