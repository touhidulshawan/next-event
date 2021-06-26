import Layout from "@components/Layout";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "@components/events/EventList";

const FilteredEventPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p>Loading....</p>;
  }

  const year = router.query.slug[0];
  const month = router.query.slug[1];

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filtering</p>;
  }

  const getFilteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!getFilteredEvent || getFilteredEvent.length === 0) {
    return <p>No event found for the chosen filter</p>;
  }

  return (
    <Layout>
      <EventList items={getFilteredEvent} />
    </Layout>
  );
};

export default FilteredEventPage;
