import {Link} from 'react-router-dom';
import styles from './Home.module.css'
import HomeImage from '../images/HomeImage.svg'

const Home = () =>{
  return(
    <div className={`content ${styles.home}`}>
      <h2>Seja bem vindo :)</h2>
      <Link to="/login">Login</Link>
      <img className={styles.homeImage} src={HomeImage}/>
    </div>
  )
}
export default Home