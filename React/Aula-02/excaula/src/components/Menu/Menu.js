import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.css"

const Menu = () =>{
  return(
    <ul className={styles.listaMenu}>
      <MenuItem nome="Home" link=""/>
      <MenuItem nome="Sobre" link="sobre"/>
      <MenuItem nome="Contato" link="contato"/>
    </ul>
  );
}

export default Menu;