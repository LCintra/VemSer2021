import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/404.module.css'

export default function Custom404() {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[])
  return (
    <div className={styles.pagina404}>
      <h1>Página não encontrada</h1>
      <p>Esse link não existe!</p>
    </div>
  )
}
