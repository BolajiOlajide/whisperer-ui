import { Fragment, useEffect, useState } from 'react';
import { Grid } from '@chakra-ui/core';
import useToast from '@chakra-ui/core/dist/Toast';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

import Overlay from '../components/Overlay';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Spinner from '../components/Spinner';

import { NOOB_QUERY } from '../graphql';
import { WHISPER_TOKEN } from '../constants';


const Home = () => {
  const toast = useToast();
  const router = useRouter();
  const [showSignIn, toggleSignIn] = useState(true);
  const { loading, error } = useQuery(NOOB_QUERY);

  useEffect(() => {

    if (process.browser) {
      try {
        const token = Cookies.get(WHISPER_TOKEN);

        if (token) {
          const { exp } = jwtDecode(token);

          if (Date.now() > exp) {
            router.push('/timeline');
          } else {
            Cookies.remove(WHISPER_TOKEN);
          }
        }

        // check to see if the token has expired

      } catch {
        // if for some reason the token decoding fails, we don't want to do anything
        console.warn('something weird is going on!');
        Cookies.remove(WHISPER_TOKEN);
      }
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    const errorMessage = `An error occurred:
${error.message}`;
    toast({
      title: 'ERROR!',
      description: errorMessage,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Home | Whisperer</title>
      </Head>
      <Grid templateColumns="repeat(2, 1fr)" h="100vh">
        <SignUp toggleSignIn={toggleSignIn} fade={!showSignIn} />
        <SignIn toggleSignIn={toggleSignIn} fade={showSignIn} />
        <Overlay inProp={showSignIn} />
      </Grid>
    </Fragment>
  );
}

export default Home;
