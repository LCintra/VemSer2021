import styles from './SayMyName.module.css'

const SayMyName = (props) =>{
  const numero = props.calcular(10)
  return(
    <div className={styles.sayMyName}>
      <p className={styles.colorP}>Olá {props.name}</p>
      <ul>
        <li>{numero}</li>
      </ul>
    </div>
  )
}

export default SayMyName;