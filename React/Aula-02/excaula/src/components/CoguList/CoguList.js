import CoguOption from "../CoguOption/CoguOption";
import styles from "./CoguList.module.css"

const CoguList = () =>{
  return(
    <>
      <div>
        <ul className={styles.coguDiv}>
          <CoguOption info="Cogumelo 1"/>
          <CoguOption info="Cogumelo 2"/>
          <CoguOption info="Cogumelo 3"/>
        </ul>
      </div>
    </>
  );
}

export default CoguList;