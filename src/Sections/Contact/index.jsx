import styles from "./styles.module.css";
import Heading from "../../Components/Heading";

function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading_1}>
        <Heading index="04" heading="What's Next" />
      </div><br /><br /><br /><br />
      <h1 className={styles.heading_2}>Get in touch</h1>
      <p className={styles.desc}>
        For general inquiries, please email us at dubeyankita017@gmail.com.
        We will do our best to respond to your email within 24-48 hours.
      </p>

      <p className={styles.desc}>
        Phone:

        If you prefer to speak with someone over the phone,
        you can reach us at 82101-38466. Our phone support hours are Monday-Friday from 9:00am to 5:00pm IST.
      </p>
      <p className={styles.desc}>

        Mailing Address:

        Social Media:

        You can also connect with us on social media. Find us on Facebook, Twitter, and Instagram.

        We look forward to hearing from you!
      </p>
      <a href="mailto:dubeyankita017@gmail.com">
        <button className={styles.btn}>Say Hello</button>
      </a>
    </section>
  );
}
export default Contact;