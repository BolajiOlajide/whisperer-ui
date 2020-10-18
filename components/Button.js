import { PseudoBox } from '@chakra-ui/core';

export default Button = ({
  children,
  background = "blue.500",
  ...props
}) => <PseudoBox
  as="button"
  bg={background}
  py={2}
  px={4}
  ml={3}
  rounded="md"
  fontWeight="semibold"
  color="white"
  _hover={{ bg: "blue.300" }}
  _focus={{ boxShadow: "outline" }}
  {...props}
  >
    {children}
  </PseudoBox>;
