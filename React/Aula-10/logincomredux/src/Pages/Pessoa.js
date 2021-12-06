import React, { useEffect } from "react";

import styles from "./Pessoa.module.css";

import { Formik, Field, Form } from 'formik';

import { IoPerson } from "react-icons/io5"
import { MdEmail,MdCalendarToday,MdDns } from "react-icons/md";

import ReactInputMask from 'react-input-mask'
import { connect } from "react-redux";
import { handleEditMode, handleGetPeople, handlePostPeople, handlePutPeople } from "../store/actions/pessoas";

import loadingGif from '../images/loading2.gif'

import User from "../components/User";

import moment from "moment";

function Pessoa({pessoas,listLoading,editMode,pessoaEditar,dispatch}) {
  useEffect(()=>{
    (async()=>{
      await handleGetPeople(dispatch)
    })()
  },[])

  let initialValues = editMode ? {
    nome:pessoaEditar.nome,
    email:pessoaEditar.email,
    dataNascimento:pessoaEditar.dataNascimento.split('-').reverse().join('-').replaceAll('-','/'),
    cpf:pessoaEditar.cpf,
  } : {
    nome:'',
    email:'',
    dataNascimento:'',
    cpf:'',
  }

  const getDateWithoutMask = (data) =>{
    return data.replaceAll('/','').replaceAll('_','')
  }

  const getCpfWithoutMask = (cpf) => {
    return cpf.replaceAll('.','').replaceAll('-','').replaceAll('_','')
  }

  const verifyCpf = (strCPF) => {
    let i
    var Soma
    var Resto
    Soma = 0;
    strCPF = strCPF.replaceAll(".", "");
    strCPF = strCPF.replace("-", "");
    if (strCPF == "00000000000") return false;
  
    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
  
    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  const verifyAge = (age) =>{
    let today = moment();
    let dataConvertida = moment(age, 'DDMMYYYY');
    let ehValido = dataConvertida.isValid()
    console.log(ehValido)
    let personAge = today.diff(moment(age, 'DDMMYYYY'), 'years')
    if(personAge > 120 || personAge < 0 || !ehValido){
      return true
    } else{
      return false
    }
  }
  
  return (
    <main className={styles.pessoaBG}>
      <div className={`content container ${styles.pessoa}`}>
        <div className={styles.cadastro}>
        <h1>{editMode? `Edição` : `Cadastro`}</h1>
        {editMode && <button onClick={()=>{
          handleEditMode(false,dispatch)
        }} className={styles.cancelEdit}>Cancelar Modo Edição</button>}
          <Formik validate={(values)=>{
            const errors = {}
            if(!values.nome){
              errors.nome = 'Campo obrigatório'
            }
            if(!values.email){
              errors.email = 'Campo obrigatório'
            }

            if(!values.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/)){
              errors.email = 'Insira um e-mail válido'
            }

            if(getDateWithoutMask(values.dataNascimento).length != 8){
              errors.dataNascimento = 'Coloque uma data completa!'
            }

            if(!getDateWithoutMask(values.dataNascimento)){
              errors.dataNascimento = 'Campo obrigatório'
            }

            if(verifyAge(values.dataNascimento)){
              errors.dataNascimento = 'Insira uma data válida'
            }

            if(!verifyCpf(getCpfWithoutMask(values.cpf))){
              errors.cpf = 'Coloque um CPF válido'
            }

            if(getCpfWithoutMask(values.cpf).length != 11){
              errors.cpf = 'Coloque o CPF completo!'
            }

            if(!getCpfWithoutMask(values.cpf)){
              errors.cpf = 'Campo obrigatório'
            }

            return errors
          }}
            initialValues={initialValues}
            onSubmit={async (values,{resetForm}) => {
              if(window.confirm(`Confirmar ${editMode? 'Edição' : 'Cadastro'}?`)){
                if(editMode){
                  handlePutPeople(pessoaEditar,values,dispatch)
                } else{
                  handlePostPeople(values,dispatch)
                }
                resetForm()
              }
            }}
            enableReinitialize={true}
          >
            {({ errors }) => (
            <Form>
            <div className={styles.inputDiv}>
                <label htmlFor="nome">Nome</label>
                <div className={styles.fieldDiv}>
                  <Field id="nome" name="nome" placeholder="Nome" />
                  <span><IoPerson className={styles.inputIcon}/></span>
                </div>
                {errors.nome && <p className={styles.errors}>{errors.nome}</p>}
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="email">E-mail</label>
                <div className={styles.fieldDiv}>
                  <Field id="email" name="email" placeholder="E-mail" />
                  <span><MdEmail className={styles.inputIcon}/></span>
                </div>
                {errors.email && <p className={styles.errors}>{errors.email}</p>}
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="dataNascimento">Data Nascimento</label>
                <div className={styles.fieldDiv}>
                  <Field id="dataNascimento" name="dataNascimento" render={({field})=>(
                    <ReactInputMask {...field} mask={`99/99/9999`} placeholder="Data Nascimento"/>
                  )} />
                  <span><MdCalendarToday className={styles.inputIcon}/></span>
                </div>
                {errors.dataNascimento && <p className={styles.errors}>{errors.dataNascimento}</p>}
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="cpf">CPF</label>
                <div className={styles.fieldDiv}>
                  <Field id="cpf" name="cpf" render={({field})=>(
                    <ReactInputMask {...field} placeholder="CPF" mask={'999.999.999-99'} />
                  )} />
                  <span><MdDns className={styles.inputIcon}/></span>
                </div>
                {errors.cpf && <p className={styles.errors}>{errors.cpf}</p>}
              </div>

              <div className={styles.buttonDiv}>
                <button type="submit">{editMode ? `Editar` : `Cadastrar`}</button>
              </div>
            </Form>
            )}
          </Formik>
        </div>
        <h1 className={styles.sectionTitle}>Usuários</h1>   
        {listLoading ? <img src={loadingGif} alt="" /> : <ul className={styles.userlist}>
          {pessoas.map(pessoa => (
            <User key={pessoa.idPessoa} pessoa={pessoa} />
          ))}
        </ul>}
      </div>
    </main>
  );
}

const mapStateToProps = state =>({
  pessoas: state.pessoasReducer.pessoas,
  editMode: state.pessoasReducer.editMode,
  pessoaEditar: state.pessoasReducer.pessoaEditar,
  listLoading: state.pessoasReducer.listLoading
})

export default connect(mapStateToProps) (Pessoa)