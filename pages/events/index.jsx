import EventList from "@components/events/EventList";
import Layout from "@components/Layout";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <Layout>
      <EventList items={allEvents} />
    </Layout>
  );
};

export default EventsPage;
