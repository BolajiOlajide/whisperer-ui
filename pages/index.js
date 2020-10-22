import { Fragment, useState } from 'react';
import { Grid } from '@chakra-ui/core';
import useToast from '@chakra-ui/core/dist/Toast';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import Overlay from '../components/Overlay';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Spinner from '../components/Spinner';

import { NOOB_QUERY } from '../graphql';


const Home = () => {
  const toast = useToast();
  const [showSignIn, toggleSignIn] = useState(true);
  const { loading, error } = useQuery(NOOB_QUERY);

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
    })
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
