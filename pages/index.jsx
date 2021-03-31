import EventList from "@components/events/EventList";
import Layout from "@components/Layout";
import { getFeaturedEvents } from "../dummy-data";

const Home = () => {
  const featuredEvent = getFeaturedEvents();
  return (
    <Layout title="Home">
      <div>
        <EventList items={featuredEvent} />
      </div>
    </Layout>
  );
};

export default Home;
