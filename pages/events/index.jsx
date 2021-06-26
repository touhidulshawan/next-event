import EventList from "@components/events/EventList";
import EventsSearch from "@components/events/EventsSearch";
import Layout from "@components/Layout";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";

const EventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Layout>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Layout>
  );
};

export default EventsPage;
