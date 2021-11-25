import React from "react";
import logo from "../images/logo.png";
import Menu from "./Menu";
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.contentheader}>
          <a href="/">
            <img className={styles.logoImg} width="80px" src={logo} alt="logo"></img>
          </a>
          <Menu />
        </div>
      </div>
    </header>
  );
}
