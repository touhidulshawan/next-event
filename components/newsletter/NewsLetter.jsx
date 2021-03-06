import { useState } from "react";
import styles from "../../styles/NewsLetter.module.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const reqBody = { email };
    const res = await fetch("/api/newsLetter", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { message } = await res.json();
    alert(message);

    setEmail("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your email address..."
        required
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};
export default NewsLetter;
