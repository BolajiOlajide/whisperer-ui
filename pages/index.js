import { useState } from 'react';
import { Grid } from '@chakra-ui/core';

import Overlay from '../components/Overlay';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


const Home = () => {
  const [showSignIn, toggleSignIn] = useState(false);

  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100vh">
      <SignUp toggleSignIn={toggleSignIn} />
      <SignIn toggleSignIn={toggleSignIn} />
      <Overlay inProp={showSignIn} />
    </Grid>
  );
}

export default Home;
