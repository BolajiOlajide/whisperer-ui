import { Fragment } from 'react';
import { Box, Textarea, Text, PseudoBox, Grid, Heading } from '@chakra-ui/core';

import Navbar from './Navbar';
import Button from './Button';

import randomWhispers from '../utils/random';

const Timeline = () => {
  return (
    <Fragment>
      <Navbar />

      <Box paddingX="100px" flex="1" paddingY="10px">
        <PseudoBox as="form" display="flex" flexDir="column" my="20px">
          <Text mb="8px">Share a secret?</Text>
          <Textarea
            placeholder="What's on your mind?"
            size="sm"
            resize="none"
            border="2px"
            borderRadius="md"
            borderColor="green.700"
          />
          <Button alignSelf="flex-end" mt="10px">Share</Button>
        </PseudoBox>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {randomWhispers.map((whisper) => (
            <Box
              border="1px solid"
              borderColor="green.700"
              padding="10px"
              w="100%"
              color="green.700"
              as="button"
              display="flex"
              flexDir="column"
              key={whisper.id}
              borderRadius="4px"
            >
              <Text fontSize="1.2em" color="black" textAlign="left">{whisper.text}</Text>
              <Text fontSize="0.8em" color="black" alignSelf="flex-end">by {whisper.whisperer.username}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
}

export default Timeline;
