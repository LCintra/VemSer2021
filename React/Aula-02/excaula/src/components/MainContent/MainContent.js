import CoguList from "../CoguList/CoguList";
import styles from './MainContent.module.css'

const MainContent = () =>{
  return(
    <div className="container">
      <h1 className={styles.mainTitle}>Estamos aprendendo React com o melhor professor de todos</h1>
      <CoguList/>
      <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat asperiores amet impedit soluta dolor quos at earum ducimus numquam, reprehenderit rerum illum ipsum dicta veniam quam atque laborum repudiandae consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio exercitationem vitae velit atque consequatur amet inventore, nam quam dolores provident ea omnis eveniet illo mollitia quis? Optio quod eum saepe!</p>
      <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat asperiores amet impedit soluta dolor quos at earum ducimus numquam, reprehenderit rerum illum ipsum dicta veniam quam atque laborum repudiandae consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aperiam culpa exercitationem architecto inventore officia ducimus voluptate porro voluptatum esse quisquam, non delectus velit dolores soluta facere necessitatibus blanditiis magnam?</p>
    </div>
  );
}

export default MainContent;