import { Fragment } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/core';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/core/dist/Popover';
import { useRouter } from 'next/router';

import NavLink from './NavLink';
import Button from './Button';

const Navbar = () => {
  const { pathname } = useRouter();

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

          <Popover usePortal>
            {({ onClose }) => {
              const handleLogout = () => {
                console.log('logging out');
                onClose();
              }

              return (
                <Fragment>
                  <PopoverTrigger>
                    <ChakraLink px={2} color="white" as="button">
                      Logout
                    </ChakraLink>
                  </PopoverTrigger>
                  <PopoverContent
                    zIndex={4}
                    bg="white"
                    borderColor="green.700"
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>
                      <Text>Are you sure you want to log out?</Text>

                      <Box display="flex" my="10px" justifyContent="flex-end">
                        <Button onClick={handleLogout}>Yes</Button>
                        <Button onClick={onClose} background="red.600" _hover={{ bg: "red.700" }}>
                          No
                        </Button>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Fragment>
              )
            }}
          </Popover>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Navbar;
