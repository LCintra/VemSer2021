import styles from "./LogoArea.module.css"
import logo from '../../images/Mushroom.png'
const LogoArea = () =>{
  return(
    <>
    <div className={styles.logoAreaDiv}>
      <img className={styles.logo} src={logo} alt="Cogumelo" />
      <h2 className={styles.logoText}>Melhores alunos do Vemser de todos os tempos</h2>
    </div>
    </>
  );
}

export default LogoArea;