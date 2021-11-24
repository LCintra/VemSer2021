import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'
import styles from './Login.module.css'

interface LoginDTO {
  usuario: string;
  senha: string;
}
export default function Login() {
  const {handleLogin} = useContext<any>(AuthContext)
  return (
    <main className={`content ${styles.login}`}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
        ) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            handleLogin(values)
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className={styles.inputdiv}>
            <label htmlFor="usuario">Usuário</label>
            <Field id="usuario" name="usuario" placeholder="Usuario" />
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="senha">Senha</label>
            <Field id="senha" type="password" name="senha" placeholder="Senha" />
          </div>
          <div className={styles.buttondiv}>
            <button type="submit">Entrar</button>
          </div>
        </Form>
      </Formik>
    </main>
  );
}
