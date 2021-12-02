import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';

import {connect} from 'react-redux'


import styles from './Login.module.css'

import { IoPerson } from "react-icons/io5"
import { MdLock } from "react-icons/md";

import { handleLogin } from '../store/actions/login';
import loginImage from '../images/login.jpg'

function Login({props,dispatch}) {
  useEffect(()=>{
    if(props.auth){
      window.location.href = '/pessoa'
    }
  },[])
  return (
    <main className={`content ${styles.login}`}>
      <div className={styles.loginBlock}>
      <h1>Login</h1>
      <img className={styles.loginIcon} src={loginImage}/>
        <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(values) => {
          handleLogin(values,dispatch)
        }}
      >
        <Form>
          <div className={styles.inputdiv}>
            <label htmlFor="usuario">Usuario</label>
            <div className={styles.fieldDiv}>
              <Field id="usuario" name="usuario" placeholder="Usuário" />
              <span><IoPerson className={styles.inputIcon}/></span>
            </div>
          </div>

          <div className={styles.inputdiv}>
            <label htmlFor="senha">Senha</label>
            <div className={styles.fieldDiv}>
              <Field type="password" id="senha" name="senha" placeholder="Senha" />
              <span><MdLock className={styles.inputIcon}/></span>
            </div>
          </div>

          <div className={styles.buttondiv}>
            <button type="submit">Logar</button>
          </div>
        </Form>
      </Formik>
      </div>
    </main>
  )
}

const mapStateToProps = state =>({
  props: state.loginReducer
})

// const mapDispatchToProps = dispatch => (
//   bindActionCreators(LoginActions,dispatch)
// )

export default connect(mapStateToProps) (Login)