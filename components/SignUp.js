import { Box, Stack, Heading } from "@chakra-ui/core";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/core";

import Button from './Button';
import Input from './Input';
import ButtonLink from './ButtonLink';


const SignUp = ({ toggleSignIn }) => {
  const goToSignUp = () => toggleSignIn(prevValue => !prevValue);

  return (
    <Box w="100%" h="100%">
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1">Welcome to Whisper</Heading>

        <FormControl>
          <FormLabel htmlFor="firstname">
            First Name
          </FormLabel>
          <Input type="text" id="firstname" name="firstname" placeholder="Your firstname" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="lastname">
            Last Name
          </FormLabel>
          <Input type="text" id="lastname" name="lastname" placeholder="Your lastname" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">
            Email address
          </FormLabel>
          <Input type="email" id="email" name="email" placeholder="Your email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">
            Password
          </FormLabel>
          <Input type="password" id="password" name="password" placeholder="Your password" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="confirmPassword">
            Confirm Password
          </FormLabel>
          <Input type="password" id="confirmPassword" name="confirmPassword" placeholder="Your password" />
        </FormControl>
        <Button><span>Create Account</span></Button>

        <ButtonLink onClick={goToSignUp}>
          Have an account? Click here to Sign in
        </ButtonLink>
      </Stack>
    </Box>
  );
};

export default SignUp;
