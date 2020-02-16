import { Box, Stack, Heading, Link } from "@chakra-ui/core";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/core";

import Button from '../components/Button';
import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';


const SignIn = ({ toggleSignIn }) => {
  const goToSignUp = () => toggleSignIn(prevValue => !prevValue);

  return (
    <Box w="100%" h="100%">
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1">Welcome to Whisper</Heading>
        <FormControl>
          <FormLabel htmlFor="email">
            Email address
          </FormLabel>
          <Input type="email" id="email" name="email" placeholder="Your email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">
            Password
          </FormLabel>
          <Input type="password" id="password" name="password" placeholder="Your password" />
        </FormControl>
        <Button><span>Sign In</span></Button>

        <ButtonLink onClick={goToSignUp}>
          Don't have an account? Sign up for one.
        </ButtonLink>
      </Stack>
    </Box>
  );
};

export default SignIn;
