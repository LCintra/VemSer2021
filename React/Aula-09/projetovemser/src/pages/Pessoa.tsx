import React, { useContext, useEffect, useState } from 'react'
import api from '../api'
import User from '../components/User'
import { PessoaContext } from '../context/PessoaContext'
import { PessoasDTO  } from '../model/PessoaDTO'
import styles from './Pessoa.module.css'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import nameIcon from '../images/user.png'
import emailIcon from '../images/o-email.png'
import nascIcon from '../images/calendar.png'
import cpfIcon from '../images/document.png'
import loadingGif from '../images/loading2.gif'
import { IoPerson } from "react-icons/io5"
import { MdEmail,MdCalendarToday,MdDns } from "react-icons/md";


export default function Pessoa() {
  const {listPessoas,setListPessoas,editMode,setEditMode,pessoaEditar,setPessoaEditar,listLoading,setListLoading} = useContext(PessoaContext);

  const getListPessoas = async () =>{
    const {data} = await api.get('/pessoa');
    setListLoading(false)
    setListPessoas(data);
  }

  const deletePessoa = async (id:number) => {
    await api.delete(`/pessoa/${id}`)
    getListPessoas()
  }

  let initialValues = editMode ? {
    nome:pessoaEditar.nome,
    email:pessoaEditar.email,
    dataNascimento:pessoaEditar.dataNascimento,
    cpf:pessoaEditar.cpf,
  } : {
    nome:'',
    email:'',
    dataNascimento:'',
    cpf:'',
  }
  console.log(initialValues)

  useEffect(()=>{
    (async()=>{
      getListPessoas()
    })()
  },[])
  return (
    <main className={styles.pessoaBG}>
      <div className={`content container ${styles.pessoa}`}>
        <div className={styles.cadastro}>
        <h1>{editMode? `Edição` : `Cadastro`}</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async(
            values: PessoasDTO,
            { setSubmitting }: FormikHelpers<PessoasDTO>
          ) => {
              if(!editMode){
                try{
                  await api.post('/pessoa',values)
                } catch(error){
                  console.log(error)
                }
              } else{
                try {
                  await api.put(`/pessoa/${pessoaEditar.idPessoa}`,{
                    cpf: values.cpf,
                    dataNascimento: values.dataNascimento,
                    email: values.email,
                    nome: values.nome
                  })
                } catch (error) {
                  console.log(error)
                }
                setEditMode(false)
              }
              setSubmitting(false)
              await getListPessoas()
          }} enableReinitialize={true}
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
                <Field id="dataNascimento" name="dataNascimento" placeholder="Data Nascimento" />
                <span><MdCalendarToday className={styles.inputIcon}/></span>
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label htmlFor="cpf">CPF</label>
              <div className={styles.fieldDiv}>
                <Field id="cpf" name="cpf" placeholder="CPF" />
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
          {listLoading ? <img src={loadingGif} /> :    
          <ul className={styles.userlist}>
          {listPessoas.map(pessoa => (
            <User key={pessoa.idPessoa} pessoa={pessoa} deletePessoa={deletePessoa} />
          ))}
        </ul>}
      </div>
    </main>
  )
}
