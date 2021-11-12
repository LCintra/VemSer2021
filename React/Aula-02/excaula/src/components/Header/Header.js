import LogoArea from "../LogoArea/LogoArea";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerDiv}>
      <div className="container">
        <div className={styles.headerInsideDiv}>
          <LogoArea />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
