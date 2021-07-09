import { useState } from "react";
import styles from "../../styles/CommentForm.module.css";

const CommentForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const reqBody = { email, name, comment };

    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.status) {
      alert("Something wrong! Please try again");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
