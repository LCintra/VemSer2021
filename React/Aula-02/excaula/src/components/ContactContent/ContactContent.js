import styles from './ContactContent.module.css'
const ContactContent = () =>{
  return(
    <section>
      <div className={`container ${styles.formDiv}`}>
        <form>
          <label for="nome">Digite seu nome completo:</label>
          <input id="nome" name="nome" type="text" placeholder="Nome Completo" required />
          <label for="email">Digite seu e-mail:</label>
          <input id="email" name="email" type="email" placeholder="E-mail"  required/>
          <label for="motivo">Qual o motivo do contato</label>
          <select id="motivo" name="motivo">
            <option value="q1">Motivo 1</option>
            <option value="q2">Motivo 2</option>
            <option value="q3">Motivo 3</option>
          </select>
          <label for="texto">Sua Mensagem:</label>
          <textarea id="texto" name="texto" cols="40" rows="10" required></textarea>
          <div className={styles.submitDiv}>
            <input type="submit" value="Salvar" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactContent