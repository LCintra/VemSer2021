import styles from './User.module.css'
import defaultUser from '../images/user.png'
import { MdEmail,MdCalendarToday,MdDns,MdModeEditOutline,MdDelete } from "react-icons/md";
import moment from "moment"

import { handleDeletePeople, handleEditMode, handleEditPerson } from '../store/actions/pessoas';
import { connect } from 'react-redux';

const User = ({pessoa,dispatch}) =>{
  return(
    <li className={styles.usuario}>
      <h3>{pessoa.nome.length > 32 ? `${pessoa.nome.substring(0,32)}...` : pessoa.nome}</h3>
      <h4 className={styles.id}>{`ID: ${pessoa.idPessoa}`}</h4>
      <img className={styles.userImage} src={defaultUser}/>
      <p className={styles.personInfo}><span>{<MdDns/>}</span>{pessoa.cpf}</p>
      <p className={styles.personInfo}><span>{<MdEmail/>}</span>{pessoa.email.length > 26 ? `${pessoa.email.substring(0,26)}...` : pessoa.email}</p>
      <p className={styles.personInfo}>{<span>{<MdCalendarToday/>}</span>}{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
      <div>
        <MdModeEditOutline onClick={()=>{
          window.confirm(`Tem certeza que deseja editar o usuário ${pessoa.nome}?`) && handleEditMode(true,dispatch); handleEditPerson(pessoa,dispatch)
        }} className={styles.pessoaIcons}/>
        <MdDelete onClick={()=>{
          window.confirm(`Tem certeza que deseja excluir o usuário ${pessoa.nome}?`) && handleDeletePeople(pessoa,dispatch)
        }} className={styles.pessoaIcons}/>
      </div>
    </li>
  )
}

const mapStateToProps = state =>({
  pessoas: state.pessoasReducer.pessoas
})

export default connect(mapStateToProps) (User)