import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={'container'}>
        <div className={styles.footercontent}>
          <small>&copy;2021 DBC Company</small>
          <address>Av. Andaraí, 531 - Passo d'Areia, Porto Alegre - RS, 91350-110</address>
        </div>
      </div>
    </footer>
  )
}
