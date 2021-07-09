import { useState } from "react";
import styles from "../../styles/CommentForm.module.css";

const CommentForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.email__container}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className={styles.name__container}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div className={styles.comment__container}>
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          rows="10"
          required
          value={comment}
          onChange={(evt) => setComment(evt.target.value)}
        ></textarea>
      </div>
      <button type="submit" className={styles.submit__btn}>
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
