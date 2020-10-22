import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { Box } from '@chakra-ui/core';


import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

import { WHISPER_TOKEN } from '../constants';


const TimelinePage = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  // const handle

  useEffect(() => {
    if (process.browser) {
      try {
        const token = window.localStorage.getItem(WHISPER_TOKEN);
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken);
        }
      } catch {
        console.error('Something bad happened!');
        router.push('/');
      }
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Timeline | Whisperer</title>
      </Head>
      {
        authenticated ? (
          <Box flex="1">
            <Navbar />
            <Timeline />
          </Box>
        ) : <Spinner />
      }
      <Footer />
    </Fragment>
  );
}

export default TimelinePage;
