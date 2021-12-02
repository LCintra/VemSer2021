import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import styles from './Menu.module.css'

import { handleLogout } from '../store/actions/login'

function Menu({props,dispatch}) {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>{props.auth && <Link to="/pessoa">Pessoa</Link>}</li>
        <li>{props.auth && <Link to="/endereco">Endereço</Link>}</li>
        <li><Link to="/login">Login</Link></li>
        <li>{props.auth && <button onClick={()=>{
          handleLogout(dispatch)
        }}>Logout</button>}</li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state =>({
  props: state.loginReducer
})

export default connect(mapStateToProps) (Menu)
