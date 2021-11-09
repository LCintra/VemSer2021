import LogoArea from "../LogoArea/LogoArea";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.headerDiv}>
        <LogoArea />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
