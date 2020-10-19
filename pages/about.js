import { Fragment } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Whisperer</title>
      </Head>
      <Navbar />
      <h1>About</h1>
    </Fragment>
  );
};

export default About;
