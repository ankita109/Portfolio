import styles from "./styles.module.css";
import Heading from "../../Components/Heading";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
          I'm pursuing B.Tech in Computer Science from Lovely Professional University, Punjab. 
          I'm interested in learning Coding language.
        </p>
          <p className={styles.desc}>
          I love to learn new things, and I'm working day by day on improving my skills. 
          
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./images/profile.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;