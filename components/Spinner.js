import { Box, Spinner } from '@chakra-ui/core';


const _Spinner = () => (
  <Box alignItems="center" justifyContent="center" h="100%" display="flex" flex="1">
    <Spinner color="green.700" size="xl" thickness="5px" emptyColor="green.100" />
  </Box>
);

export default _Spinner;
