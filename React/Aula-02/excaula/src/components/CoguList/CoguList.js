import CoguOption from "../CoguOption/CoguOption";
import styles from "./CoguList.module.css"

const CoguList = () =>{
  return(
    <>
        <ul className={styles.coguDiv}>
          <CoguOption info="Cogumelo 1"/>
          <CoguOption info="Cogumelo 2"/>
          <CoguOption info="Cogumelo 3"/>
        </ul>
    </>
  );
}

export default CoguList;