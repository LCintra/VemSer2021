import api from '../../api'

export const handleListLoading = async(dispatch) => {
  const listLoading = {
    type: 'SET_LISTLOADING',
    listLoading: false
  }
  dispatch(listLoading)
}

export const handleGetPeople = async (dispatch) =>{
  const {data} = await api.get('/pessoa')
  const pessoas = {
    type: 'GET_PESSOAS',
    pessoas: data
  }
  handleListLoading(dispatch)
  dispatch(pessoas)
}

export const handlePostPeople = async (user,dispatch) => {
  user.dataNascimento = user.dataNascimento.split('/').reverse().join('/').replaceAll('/','-')
  user.cpf = user.cpf.replaceAll('.','').replaceAll('-','')
  await api.post('/pessoa',user)
  handleGetPeople(dispatch)
}

export const handleDeletePeople = async(user,dispatch) => {
  await api.delete(`/pessoa/${user.idPessoa}`)
  handleGetPeople(dispatch)
}

export const handleEditMode = (mode,dispatch) =>{
  const editMode = mode ? {type:'SET_EDITMODE',editMode:true} : {type:'SET_EDITMODE',editMode:false}
  dispatch(editMode)
}

export const handleEditPerson = (user,dispatch) => {
  const editPerson = {
    type: 'SET_EDITPERSON',
    pessoaEditar: user
  }
  dispatch(editPerson)
}

export const handlePutPeople = async(pessoaEditar,values,dispatch) => {
  await api.put(`/pessoa/${pessoaEditar.idPessoa}`,{
    cpf: values.cpf.replaceAll('.','').replaceAll('-',''),
    dataNascimento: values.dataNascimento.split('/').reverse().join('/').replaceAll('/','-'),
    email: values.email,
    nome: values.nome
  })
  handleEditMode(false,dispatch)
  handleGetPeople(dispatch)
}