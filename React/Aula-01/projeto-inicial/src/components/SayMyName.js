import styles from './SayMyName.module.css'

const SayMyName = (props) =>{
  return(
    <div className={styles.sayMyName}>
      <p className={styles.colorP}>Olá {props.name}</p>
      <ul>
        <li>dasdasdasdasd</li>
      </ul>
    </div>
  )
}

export default SayMyName;