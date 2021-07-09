import { useState } from "react";
import styles from "@styles/NewsLetter.module.css";

const NewsLetter = () => {
  const [email, setEmail] = useState();
  return (
    <form className={styles.form}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your email address..."
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};
export default NewsLetter;
