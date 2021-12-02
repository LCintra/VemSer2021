import React, { useEffect } from "react";

import styles from "./Pessoa.module.css";

import { Formik, Field, Form } from 'formik';

import { IoPerson } from "react-icons/io5"
import { MdEmail,MdCalendarToday,MdDns } from "react-icons/md";

import ReactInputMask from 'react-input-mask'
import { connect } from "react-redux";
import { handleGetPeople, handlePostPeople, handlePutPeople } from "../store/actions/pessoas";

import loadingGif from '../images/loading2.gif'

import User from "../components/User";

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
  
  return (
    <main className={styles.pessoaBG}>
      <div className={`content container ${styles.pessoa}`}>
        <div className={styles.cadastro}>
        <h1>{editMode? `Edição` : `Cadastro`}</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values,{resetForm}) => {
              if(editMode){
                handlePutPeople(pessoaEditar,values,dispatch)
              } else{
                handlePostPeople(values,dispatch)
              }
              resetForm()
            }}
            enableReinitialize={true}
          >
            <Form>
            <div className={styles.inputDiv}>
                <label htmlFor="nome">Nome</label>
                <div className={styles.fieldDiv}>
                  <Field id="nome" name="nome" placeholder="Nome" />
                  <span><IoPerson className={styles.inputIcon}/></span>
                </div>
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="email">E-mail</label>
                <div className={styles.fieldDiv}>
                  <Field id="email" name="email" placeholder="E-mail" />
                  <span><MdEmail className={styles.inputIcon}/></span>
                </div>
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="dataNascimento">Data Nascimento</label>
                <div className={styles.fieldDiv}>
                  <Field id="dataNascimento" name="dataNascimento" render={({field})=>(
                    <ReactInputMask {...field} mask={`99/99/9999`} placeholder="Data Nascimento"/>
                  )} />
                  <span><MdCalendarToday className={styles.inputIcon}/></span>
                </div>
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="cpf">CPF</label>
                <div className={styles.fieldDiv}>
                  <Field id="cpf" name="cpf" render={({field})=>(
                    <ReactInputMask {...field} placeholder="CPF" mask={'999.999.999-99'} />
                  )} />
                  <span><MdDns className={styles.inputIcon}/></span>
                </div>
              </div>

              <div className={styles.buttonDiv}>
                <button type="submit">{editMode ? `Editar` : `Cadastrar`}</button>
              </div>
            </Form>
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