import axios from "axios"
export const handleEndereco = async (cep,dispatch) =>{
  let endereco
  try {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    if(data.erro !== true){
      endereco = {
        type: 'SET_ENDERECO',
        cep: cep,
        cidade: data.localidade,
        complemento: data.complemento,
        estado: data.uf,
        logradouro: data.logradouro,
        errors: false,
        pais: 'Brasil'
      }
    } else{
      endereco = {
        type: 'SET_ENDERECO',
        cep: cep,
        cidade: '',
        complemento: '',
        estado: '',
        logradouro: '',
        errors: true,
        pais: ''
      }
    }
  } catch (error) {
    endereco = {
      type: 'SET_ENDERECO',
      cep: cep,
      cidade: '',
      complemento: '',
      estado: '',
      logradouro: '',
      errors: true,
      pais: ''
    }
  }
  dispatch(endereco)
}