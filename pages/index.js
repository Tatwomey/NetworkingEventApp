import Head from 'next/head';
import Link from 'next/link';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
 

  return (
    <div>
      <Head>
        <title> NextJs Events </title>
        <meta name="descripton"
        content="Find a lot of great events that allow you to evolve!" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;