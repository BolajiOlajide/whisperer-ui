import { Fragment, memo } from 'react';
import { Spinner, Text, Box, Textarea } from '@chakra-ui/core';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/core/dist/Modal';

import Button from './Button';
import { randomWhisperComments } from '../utils/random';
import Comments from './Comments';


const Whisper = ({ whisper, closeModal }) => {
  return (
    <Fragment>
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader>
          <Text textDecor="underline">Check out this whisper!</Text>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Box flexDir="column" display="flex">
            <Text>{whisper.text}</Text>
            <Text alignSelf="flex-end">- {whisper.whisperer.username}</Text>

            <Textarea
              placeholder="What do you think about this whisper?"
              size="sm"
              resize="none"
              border="2px"
              borderRadius="md"
              borderColor="green.700"
              mt="20px"
            />
            <Button bg="green.700" variantColor="green" alignSelf="flex-end" onClick={() => { }} my="20px">
              Add Comment
            </Button>
          </Box>

          <Box height="400px" maxH="400px" overflowY="auto" bg="#F8F8F8" px="10px">
            <Comments comments={randomWhisperComments} />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button bg="red.700" variantColor="red" mr={3} onClick={closeModal} _hover={{ bg: "red.900" }}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Fragment>
  );
};

export default memo(Whisper);
