import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'
import styles from './Login.module.css'
import { LoginDTO } from '../model/LoginDTO';
import loginImage from '../images/login.jpg'
import inputUser from '../images/user.png'
import inputPassword from '../images/password.png'


export default function Login() {
  const {handleLogin} = useContext<any>(AuthContext)
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
                <span><img className={styles.inputIcon} src={inputUser}></img></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="senha">Senha</label>
              <div className={styles.fieldDiv}>
                <Field id="senha" type="password" name="senha" placeholder="Senha" />
                <span><img className={styles.inputIcon} src={inputPassword}></img></span>
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
