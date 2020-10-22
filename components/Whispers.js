import { memo } from 'react';
import { Box, Text } from '@chakra-ui/core';


const Whispers = ({ whispers, handleWhisperClick }) => whispers.map((whisper) => (
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
));

export default memo(Whispers);
