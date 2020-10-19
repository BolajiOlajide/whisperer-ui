import { Box, Flex, Image, Text } from '@chakra-ui/core';

import NavLink from './NavLink';

const Navbar = () => {
  return (
    <Flex
        bg="tomato"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            size={30}
          />
          <Text pl={3} color="white">
            Company
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
