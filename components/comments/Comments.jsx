import styles from "../../styles/Comments.module.css";

const Comments = ({ name, comment }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default Comments;
