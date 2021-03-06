import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventDetailCard from "../../components/events/EventDetailCard";

const EventDetailPage = () => {
  const router = useRouter();
  const eventID = router.query.eventID;
  const event = getEventById(eventID);

  if (!event) return <p>404: Event not found</p>;
  return (
    <Layout>
      <EventDetailCard
        image={event.image}
        date={event.date}
        location={event.location}
        title={event.title}
        description={event.description}
        isFeatured={event.isFeatured}
        eventID={eventID}
      />
    </Layout>
  );
};

export default EventDetailPage;
