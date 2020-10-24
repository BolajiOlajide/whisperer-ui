import { Fragment, useState } from 'react';
import { Box, Textarea, Text, PseudoBox, Grid, useDisclosure, Skeleton } from '@chakra-ui/core';
import { Modal } from '@chakra-ui/core/dist/Modal';
import { useQuery } from '@apollo/react-hooks';

import Button from './Button';
import Whisper from './Whisper';
import Whispers from './Whispers';
import LoadingWhispers from './LoadingWhispers';

import { randomWhispers } from '../utils/random';
import { FETCH_WHISPER_QUERY } from '../graphql';

const Timeline = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentWhisper, setCurrentWhisper] = useState(null);
  const { data: whispers, loading, error } = useQuery(FETCH_WHISPER_QUERY);

  const handleWhisperClick = (whisper) => {
    setCurrentWhisper(whisper);
    onOpen();
  }

  const closeModal = () => {
    onClose();
    setCurrentWhisper(null);
  }

  console.log(whispers, error)

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
          <Whispers whispers={randomWhispers} handleWhisperClick={handleWhisperClick} />
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered preserveScrollBarGap scrollBehavior="outside">
        <Whisper whisper={currentWhisper} closeModal={closeModal} />
      </Modal>
    </Fragment>
  );
}

export default Timeline;
