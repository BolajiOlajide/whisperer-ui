import { PseudoBox } from '@chakra-ui/core';

const Button = ({
  children,
  background = "green.700",
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
  _hover={{ bg: "green.900" }}
  _focus={{ boxShadow: "outline" }}
  {...props}
  >
    {children}
  </PseudoBox>;

export default Button;
