import { Text, Box } from '@chakra-ui/core';

const Comments = ({ comments }) => comments.map(comment => (
  <Box key={comment.id} my="10px">
    <Text fontWeight="bold" color="green.700">{comment.commenter.username}: </Text>
    <Text>{comment.comment}</Text>
  </Box>
));

export default Comments;
