import Link from "next/link";
import styles from "../../styles/Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
