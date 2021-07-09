import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/EventDetailCard.module.css";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";

const EventDetailCard = (props) => {
  const { date, description, image, isFeatured, location, title, eventID } =
    props;
  const [toggleComments, setToogleComments] = useState(false);

  const handleToggleComments = () => {
    setToogleComments((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={"/" + image} alt={title} width={200} height={200} />
        </div>
        <div>
          <div className={styles.headerContent}>
            <h1>{title}</h1>
            {isFeatured ? (
              <small className={styles.featured}>Featured</small>
            ) : null}
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.footerContent}>
            <time className={styles.date}>{date}</time>
            <address className={styles.address}>{location}</address>
          </div>
        </div>
      </div>
      <button
        className={styles.showComments__btn}
        onClick={handleToggleComments}
      >
        Show Comments
      </button>
      {toggleComments && (
        <div className={styles.commentForm}>
          <CommentForm eventID={eventID} />
        </div>
      )}
      {toggleComments && (
        <Comments eventID={eventID} showComments={toggleComments} />
      )}
    </>
  );
};

export default EventDetailCard;
