import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Icon,
  Link as ChakraLink,
  useDisclosure,
  Button
} from '@chakra-ui/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core/dist/Modal';
import { useRouter } from 'next/router';

import NavLink from './NavLink';
import { Fragment } from 'react';

const Navbar = () => {
  const { pathname } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = () => {
    console.log('logging out');
    onClose();
  }

  return (
    <Fragment>
      <Flex
        bg="green.700"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/timeline">
          <ChakraLink _hover={{ textDecoration: "none" }} >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
              <Icon name="logo" size="2em" role="img" focusable />
              <Text pl={3} color="white" fontWeight="bold" fontSize="lg">
                Whisperer
            </Text>
            </Flex>
          </ChakraLink>
        </Link>
        <Box>
          {pathname === '/timeline' ? null : <NavLink text="Timeline" href="/timeline" />}
          {pathname === '/about' ? null : <NavLink text="About" href="/about" />}
          <ChakraLink px={2} color="white" as="button" onClick={onOpen}>
            Logout
        </ChakraLink>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent bg="white">
          <ModalHeader>Are you sure you want to Log out?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button variantColor="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button bg="green.300" variantColor="green" onClick={handleLogout}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
