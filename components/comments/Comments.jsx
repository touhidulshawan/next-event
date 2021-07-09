import styles from "../../styles/Comments.module.css";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>Touhidul Shawan</h4>
      <p className={styles.comment}>This is a test comment</p>
    </div>
  );
};

export default Comments;
