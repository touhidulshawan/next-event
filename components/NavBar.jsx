import Link from "next/link";
import styles from "@styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/events">
            <a className={styles.navLink}>Events</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
