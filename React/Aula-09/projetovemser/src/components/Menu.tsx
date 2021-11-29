import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import styles from './Menu.module.css'

export default function Menu() {
  const {handleLogout,auth} = useContext<any>(AuthContext)
  return (
    <nav className={styles.menu}>
      <ul>
        {auth && <li><Link to="/pessoa">Pessoa</Link></li>}
        <li><Link to="/login">Login</Link></li>
        <li>{auth && <button onClick={handleLogout}>Logout</button>}</li>
      </ul>
    </nav>
  )
}
