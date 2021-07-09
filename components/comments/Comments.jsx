import { useEffect, useState } from "react";
import styles from "../../styles/Comments.module.css";

const Comments = ({ eventID, showComments }) => {
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await fetch(`/api/comments/${eventID}`);
    const { comments } = await res.json();
    setComment(comments);
    setLoading(false);
  }, [showComments]);

  if (loading) {
    return <p>Loading comments...</p>;
  }
  if (!comments) {
    return <p className={styles.alert}>No comments found</p>;
  }
  return (
    <div className={styles.comments__container}>
      {comments.map((c) => (
        <div className={styles.wrapper} key={c.id}>
          <h4 className={styles.name}>{c.name}</h4>
          <p className={styles.comment}>{c.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
