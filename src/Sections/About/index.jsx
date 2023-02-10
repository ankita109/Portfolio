import styles from "./styles.module.css";
import Heading from "../../Components/Heading";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className="about_desc">
            Ankita Kumari : A highly motivated and detail-oriented web
            developer seeking a challenging role in a dynamic organization where
            I can utilize my technical skills to contribute to the success of
            projects and growth of the company.
          </p>

          <p className="about_desc">
            I am a web developer ehthausiast with over 1 years of experience in
            designing, developing, and maintaining websites and web
            applications. I have a strong understanding of HTML, CSS,
            JavaScript, and various web development frameworks such as React,
            Angular, NodeJs, MongoDB, MySQL.
          </p>
          <p className="about_desc"> I have experience in implementing
            responsive design, cross-browser compatibility, and security
            measures to ensure the smooth functioning and protection of
            websites. My excellent problem-solving skills, ability to work
            independently, and commitment to meeting deadlines make me a
            valuable asset to any team.
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