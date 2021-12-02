import styles from './NotFound.module.css'
import image404 from '../images/sadsmile.png'
import { useEffect } from 'react'

const NotFound = () =>{
  useEffect(()=>{
    setTimeout(()=>{
      window.location.href = '/login'
    },3000)
  },[])
  return(
    <div className={`content ${styles.notFound}`}>
      <h1>404</h1>
      <h2>Página não encontrada :(</h2>
      <img src={image404}/>
    </div>
  )
}

export default NotFound