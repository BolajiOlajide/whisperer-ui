import { Fragment } from 'react';
import Head from 'next/head';

import Timeline from '../components/Timeline';

const TimelinePage = () => {
  return (
    <Fragment>
      <Head>
        <title>User's Timeline | Whisperer</title>
      </Head>
      <Timeline />
    </Fragment>
  );
}

export default TimelinePage;
