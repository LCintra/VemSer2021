import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext'
import styles from './Login.module.css'
import { LoginDTO } from '../model/LoginDTO';
import loginImage from '../images/login.jpg'
import inputUser from '../images/user.png'
import inputPassword from '../images/password.png'
import { IoPerson } from "react-icons/io5"
import { MdLock } from "react-icons/md";



export default function Login() {
  const {handleLogin,auth} = useContext<any>(AuthContext)
  useEffect(()=>{
    if(auth){
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
          onSubmit={(
            values: LoginDTO,
            { setSubmitting }: FormikHelpers<LoginDTO>
          ) => {
              // alert(JSON.stringify(values, null, 2));
              handleLogin(values)
              setSubmitting(false);
          }}
        >
          <Form>
            <div className={styles.inputdiv}>
              <label htmlFor="usuario">Usuário</label>
              <div className={styles.fieldDiv}>
                <Field id="usuario" name="usuario" placeholder="Usuario"/>
                <span><IoPerson className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="senha">Senha</label>
              <div className={styles.fieldDiv}>
                <Field id="senha" type="password" name="senha" placeholder="Senha" />
                <span><MdLock className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.buttondiv}>
              <button type="submit">Entrar</button>
            </div>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
