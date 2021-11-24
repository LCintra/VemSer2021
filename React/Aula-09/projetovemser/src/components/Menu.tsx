import React from 'react'
import {Link} from "react-router-dom"
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to="/pessoa">Pessoa</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}
