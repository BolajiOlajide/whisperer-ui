import { PseudoBox } from '@chakra-ui/core';


const Input = (props) => (
  <PseudoBox
    as="input"
    py={2}
    px={4}
    rounded="md"
    bg="gray.100"
    borderWidth="1px"
    _hover={{ borderColor: "green.700", bg: "gray.200" }}
    _focus={{
      outline: "none",
      bg: "white",
      boxShadow: "outline",
      // borderColor: "green.700"
    }}
    {...props}
    focusBorderColor="lime"
  />
);

export default Input;
