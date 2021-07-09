import EventList from "@components/events/EventList";
import Layout from "@components/Layout";
import NewsLetter from "@components/newsletter/NewsLetter";
import { getFeaturedEvents } from "../dummy-data";

const Home = ({ featuredEvent }) => {
  return (
    <Layout title="Home">
      <div>
        <NewsLetter />
      </div>
      <div>
        <EventList items={featuredEvent} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const featuredEvent = getFeaturedEvents();

  return {
    props: {
      featuredEvent,
    },
  };
}

export default Home;
