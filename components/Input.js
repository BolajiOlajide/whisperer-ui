import { PseudoBox } from '@chakra-ui/core';


export default Input = (props) => (
  <PseudoBox
    as="input"
    py={2}
    px={4}
    rounded="md"
    bg="gray.100"
    borderWidth="1px"
    _hover={{ borderColor: "gray.200", bg: "gray.200" }}
    _focus={{
      outline: "none",
      bg: "white",
      boxShadow: "outline",
      borderColor: "gray.300"
    }}
    {...props}
  />
)
