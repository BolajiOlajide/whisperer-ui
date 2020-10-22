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
  const [authenticated, setAuthenticated] = useState(true);
  const [title, setTitle] = useState(null);

  // useEffect(() => {
  //   if (process.browser) {
  //     const token = window.localStorage.getItem(WHISPER_TOKEN);
  //     if (token) {
  //       const decodedToken = jwtDecode(token);
  //       console.log(decodedToken);
  //     }
  //     router.push('/');
  //   }
  // }, []);

  const pageTitle = title || 'Timeline | Whisperer'
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
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
