import Menu from "../Menu/Menu";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
      <div className="container">
        <div className={styles.footerInsideDiv}>
          <Menu />
          <address>AV. Andarai 531 - Porto Alegre</address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
