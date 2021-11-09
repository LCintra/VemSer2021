import styles from "./MenuItem.module.css"
const MenuItem = ({nome,link}) =>{
  return(
    <a className={styles.menuItemAncor} href={link}><li className={styles.menuItem}>{nome}</li></a>
  );
}

export default MenuItem;