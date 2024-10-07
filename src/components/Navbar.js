import Link from "next/link";
//import styles from '../styles/Navbar/module.css' // Adjust the path if necessary
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand}>Rohan</h1>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          About
        </Link>
        <Link className={styles.link} href="/">
          Projects
        </Link>
        <Link className={styles.link} href="/">
          Experience
        </Link>
        <Link className={styles.link} href="/">
          Socials
        </Link>
      </div>
      <Link className={styles.contactButton} href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
