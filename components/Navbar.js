import { Box, Flex, Image, Text, Icon } from '@chakra-ui/core';

import NavLink from './NavLink';

const Navbar = () => {
  return (
    <Flex
        bg="green.700"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Icon name="logo" size="2em" role="img" focusable />
          <Text pl={3} color="white" fontWeight="bold" fontSize="lg">
            Whisperer
          </Text>
        </Flex>
        <Box>
          <NavLink text="About" href="/about" />
          <NavLink text="Logout" href="/logout" />
        </Box>
      </Flex>
  );
};

export default Navbar;
