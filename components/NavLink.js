import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/core';

const NavLink = ({ text, href, ...props }) => (
  <Link href={href}>
    <ChakraLink px={2} color="white" {...props}>
      <span>{text}</span>
    </ChakraLink>
  </Link>
);

export default NavLink;
