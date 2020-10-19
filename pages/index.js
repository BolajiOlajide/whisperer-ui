import { Fragment, useState } from 'react';
import { Grid } from '@chakra-ui/core';
import Head from 'next/head';

import Overlay from '../components/Overlay';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


const Home = () => {
  const [showSignIn, toggleSignIn] = useState(true);

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
