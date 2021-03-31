import Image from "next/image";
import styles from "@styles/EventItem.module.css";
import Button from "@components/ui/Button";

const EventItem = (props) => {
  const { id, title, image, date, location } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.wrapper}>
      <Image
        src={"/" + image}
        width={200}
        height={200}
        alt={title}
        className={styles.img}
      />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Button link={exploreLink}>Explore Link</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
