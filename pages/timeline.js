import { Fragment } from 'react';
import Head from 'next/head';

import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';

const TimelinePage = () => {
  return (
    <Fragment>
      <Head>
        <title>User's Timeline | Whisperer</title>
      </Head>
      <Navbar />
      <Timeline />
    </Fragment>
  );
}

export default TimelinePage;
