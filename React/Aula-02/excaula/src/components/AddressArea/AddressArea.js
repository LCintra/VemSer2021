import styles from './AddressArea.module.css'
const AddressArea = () =>{
  return(
    <>
      <h2 className={styles.addressTitle}>Endereço da DBC</h2>
      <div>
        <iframe className={styles.mapIframe} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13818.880335381276!2d-51.1686816!3d-30.0161929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636499569023!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy"></iframe>
      </div>
    </>
  );
}

export default AddressArea;