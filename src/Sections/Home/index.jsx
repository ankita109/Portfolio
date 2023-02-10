import styles from "./styles.module.css";
function Home() {
    return (
      <section className={styles.home_section} id="home">
        <p className={styles.greet}>Hi, my name is Ankita Kumari</p>
        <h1 className={styles.heading_1}>Ankita.</h1>
        <h1 className={styles.heading_2}> Frontend Web Developer</h1>
        <p className={styles.desc}>
        I'm pursuing B.Tech in Computer Science from Lovely Professional University, Punjab. 
          I'm interested in learning Coding language. I love to learn new things, and 
          I'm working day by day on improving my skills. 
        </p>
        <a href="https://github.com/ankita109" target="_blank">
          <button className={styles.btn}>Check out my work!</button>
        </a>
      </section>
    );
  }
  
  export default Home;