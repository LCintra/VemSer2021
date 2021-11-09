import logo from '../../images/Mushroom.png'
import styles from './CoguOption.module.css'
const CoguOption = ({info}) =>{
  return(
    <>
      <li className={styles.listLi}>
        <img className={styles.coguImage} src={logo}/>
        <p>{info}</p>
      </li>
    </>
  );
}

export default CoguOption;