import styles from './User.module.css'
import defaultUser from '../images/user.png'
import { MdEmail,MdCalendarToday,MdDns,MdModeEditOutline,MdDelete } from "react-icons/md";
import moment from "moment"

import { handleDeletePeople, handleEditMode, handleEditPerson } from '../store/actions/pessoas';
import { connect } from 'react-redux';

const User = ({pessoa,dispatch}) =>{
  return(
    <li className={styles.usuario}>
      <h3>{pessoa.nome}</h3>
      <img className={styles.userImage} src={defaultUser}/>
      <p><span>{<MdDns/>}</span>{pessoa.cpf}</p>
      <p><span>{<MdEmail/>}</span>{pessoa.email}</p>
      <p>{<span>{<MdCalendarToday/>}</span>}{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
      <div>
        <MdModeEditOutline onClick={()=>{
          handleEditMode(true,dispatch)
          handleEditPerson(pessoa,dispatch)
        }} className={styles.pessoaIcons}/>
        <MdDelete onClick={()=>{
          handleDeletePeople(pessoa,dispatch)
        }} className={styles.pessoaIcons}/>
      </div>
    </li>
  )
}

const mapStateToProps = state =>({
  pessoas: state.pessoasReducer.pessoas
})

export default connect(mapStateToProps) (User)