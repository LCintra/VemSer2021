import React, { useContext, useEffect } from 'react'
import api from '../api'
import { AuthContext } from '../context/AuthContext'
import styles from './Pessoa.module.css'

export default function Pessoa() {
  useEffect(()=>{
    (async()=>{
      const {data} = await api.get('/pessoa')
      console.log(data)
    })()
  },[])
  return (
    <div className={`content ${styles.pessoa}`}>
      <h1>Pessoa</h1>

    </div>
  )
}
