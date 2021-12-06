import { Formik, Field, Form, FormikHelpers } from 'formik'
import styles from './Endereco.module.css'
import { ImOffice } from "react-icons/im";
import { FaCity,FaRoad } from "react-icons/fa";
import { BiAlignRight } from "react-icons/bi"
import { BsArchiveFill,BsFillBookmarkFill,BsFillCursorFill } from "react-icons/bs";
import { connect } from 'react-redux';
import { handleEndereco } from '../store/actions/endereco';

const Endereco = ({props,dispatch}) =>{
  return(
  <div className={`content ${styles.endereco}`}>
    <div className={styles.enderecoBlock}>
    <h1>Endereço</h1>
    <Formik
        initialValues={props}
        onSubmit={(
          values,
          { setSubmitting }
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        enableReinitialize={true}
      >
        <Form>
          <div className={styles.inputdiv}>
            <label htmlFor="cep">CEP</label>
            <div className={styles.fieldDiv}>
              <Field onBlur={(e)=>{
              handleEndereco(e.target.value,dispatch)
            }} id="cep" name="cep" placeholder="CEP"/>
              <span><BsArchiveFill className={styles.inputIcon}/></span>
            </div>
            <p className={styles.errors}>{props.errors ? 'o CEP não existe' : ''}</p>
          </div>
          <div className={styles.inputdiv}>
            <label htmlFor="cidade">Cidade</label>
            <div className={styles.fieldDiv}>
              <Field id="cidade" type="text" name="cidade" placeholder="Cidade" />
              <span><FaCity className={styles.inputIcon}/></span>
            </div>
          </div>
          <div className={styles.inputdiv}>
              <label htmlFor="complemento">Complemento</label>
              <div className={styles.fieldDiv}>
                <Field id="complemento" type="text" name="complemento" placeholder="Complemento" />
                <span><img className={styles.inputIcon}></img></span>
                <span><BiAlignRight className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="estado">Estado</label>
              <div className={styles.fieldDiv}>
                <Field id="estado" type="text" name="estado" placeholder="Estado" />
                <span><img className={styles.inputIcon}></img></span>
                <span><ImOffice className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="logradouro">Logradouro</label>
              <div className={styles.fieldDiv}>
                <Field id="logradouro" type="text" name="logradouro" placeholder="Logradouro" />
                <span><img className={styles.inputIcon}></img></span>
                <span><FaRoad className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="numero">Número</label>
              <div className={styles.fieldDiv}>
                <Field id="numero" type="text" name="numero" placeholder="Numero" />
                <span><img className={styles.inputIcon}></img></span>
                <span><BsFillBookmarkFill className={styles.inputIcon}/></span>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <label htmlFor="pais">País</label>
              <div className={styles.fieldDiv}>
                <Field id="pais" type="text" name="pais" placeholder="País" />
                <span><img className={styles.inputIcon}></img></span>
                <span><BsFillCursorFill className={styles.inputIcon}/></span>
              </div>
            </div>
          <div className={styles.buttondiv}>
            <button type="submit">Registrar</button>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
  )
}

const mapStateToProps = state =>({
  props: state.enderecoReducer
})

export default connect(mapStateToProps) (Endereco)