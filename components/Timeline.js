import { Fragment, useState } from 'react';
import { Box, Textarea, Text, PseudoBox, Grid, useDisclosure } from '@chakra-ui/core';
import { Modal } from '@chakra-ui/core/dist/Modal';

import Button from './Button';
import Whisper from './Whisper';

import { randomWhispers } from '../utils/random';

const Timeline = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentWhisper, setCurrentWhisper] = useState(null);

  const handleWhisperClick = (whisper) => {
    setCurrentWhisper(whisper);
    onOpen();
  }

  const closeModal = () => {
    onClose();
    setCurrentWhisper(null);
  }

  return (
    <Fragment>
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

        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
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
              alignItems="flex-start"
              justifyContent="space-between"
              onClick={() => handleWhisperClick(whisper)}
            >
              <Text fontSize="1.2em" color="black" textAlign="left">{whisper.text}</Text>
              <Text fontSize="0.8em" color="black" alignSelf="flex-end">by {whisper.whisperer.username}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered preserveScrollBarGap scrollBehavior="outside">
        <Whisper whisper={currentWhisper} closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
}

export default Timeline;
