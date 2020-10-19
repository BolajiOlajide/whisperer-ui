import { Fragment } from 'react';
import Head from 'next/head';
import { Box, Heading, Text } from '@chakra-ui/core';

import Navbar from '../components/Navbar';

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Whisperer</title>
      </Head>
      <Navbar />

      <Box paddingX="100px" flex="1" paddingY="10px">
        <Heading as="h1" color="green.700">About Whisperer</Heading>

        <Text my="40px">
          Whisperer was created by @Bolaji___ to do something no one ever thought of, share secrets anonymously.
          With whisperer, you can tell people things anonymously.
        </Text>

        <Text>Share a secret today. A good secret. </Text>
      </Box>
    </Fragment>
  );
};

export default About;
