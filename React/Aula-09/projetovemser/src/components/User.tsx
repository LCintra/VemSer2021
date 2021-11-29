import { PessoasDTO } from "../model/PessoaDTO"
import styles from './User.module.css'
import defaultUser from '../images/user.png'
import editIcon from '../images/pencil.png'
import deleteIcon from '../images/bin.png'
import { useContext } from "react"
import { PessoaContext } from "../context/PessoaContext"
import { MdEmail,MdCalendarToday,MdDns,MdModeEditOutline,MdDelete } from "react-icons/md";
import moment from "moment"

interface IPessoa{
  pessoa:PessoasDTO
  deletePessoa: (id: number) => Promise<void>
}

const User: React.FC<IPessoa> = ({pessoa,deletePessoa}) =>{
  const {editMode,setEditMode,setPessoaEditar} = useContext(PessoaContext);
  return(
    <li className={styles.usuario}>
      <h3>{pessoa.nome}</h3>
      <img className={styles.userImage} src={defaultUser}/>
      <p><span>{<MdDns/>}</span>{pessoa.cpf}</p>
      <p><span>{<MdEmail/>}</span>{pessoa.email}</p>
      <p>{<span>{<MdCalendarToday/>}</span>}{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
      <div>
        <MdModeEditOutline onClick={()=>{
          if(pessoa.idPessoa){
            setPessoaEditar(pessoa)
            setEditMode(true)
          }
        }} className={styles.pessoaIcons}/>
        <MdDelete onClick={()=>{
          console.log('entrou')
          if(pessoa.idPessoa){
            deletePessoa(pessoa.idPessoa)
          }
        }} className={styles.pessoaIcons}/>
      </div>
    </li>
  )
}

export default User