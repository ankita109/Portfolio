import styles from "./styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a href="https://www.linkedin.com/in/ankita-kumari-44a826200/" target="_blank" className={styles.icons}>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/ankita109" target="_blank" className={styles.icons}>
          <GitHubIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:dubeyankita017@gmail.com" className={styles.email}>
          dubeyankita017@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;