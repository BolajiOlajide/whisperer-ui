import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { Box } from '@chakra-ui/core';
import Cookies from 'js-cookie';


import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

import { WHISPER_TOKEN } from '../constants';


const TimelinePage = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (process.browser) {
      try {
        const token = Cookies.get(WHISPER_TOKEN);

        if (token) {
          const { exp } = jwtDecode(token);

          if ((Date.now() / 1000) > exp) {
            return setAuthenticated(true);
          }
        }

        Cookies.remove(WHISPER_TOKEN);
        router.push('/');
      } catch {
        console.error('Something bad happened!');
        Cookies.remove(WHISPER_TOKEN);
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
