import styles from "./MenuItem.module.css"
import {Link} from 'react-router-dom'
const MenuItem = ({nome,link}) =>{
  return(
    <>
      <Link className={styles.menuItemAncor} to={`/${link}`}><li className={styles.menuItem}>{nome}</li></Link>
    </>
  );
}

export default MenuItem;