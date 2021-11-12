import styles from './AboutContent.module.css'
const AboutContent = () =>{
  return(
    <>
      <div className="container">
        <section>
          <h1 className={styles.aboutTitle}>SOBRE A DBC</h1>
          <iframe className={styles.iframeVideo} width="560" height="315" src="https://www.youtube.com/embed/lq5hlLaa16s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat asperiores amet impedit soluta dolor quos at earum ducimus numquam, reprehenderit rerum illum ipsum dicta veniam quam atque laborum repudiandae consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio exercitationem vitae velit atque consequatur amet inventore, nam quam dolores provident ea omnis eveniet illo mollitia quis? Optio quod eum saepe!</p>
          <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat asperiores amet impedit soluta dolor quos at earum ducimus numquam, reprehenderit rerum illum ipsum dicta veniam quam atque laborum repudiandae consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aperiam culpa exercitationem architecto inventore officia ducimus voluptate porro voluptatum esse quisquam, non delectus velit dolores soluta facere necessitatibus blanditiis magnam?</p>
        </section>
      </div>
    </>
  );
}

export default AboutContent;