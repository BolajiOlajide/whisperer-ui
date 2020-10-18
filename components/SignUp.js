import {
  Stack,
  Heading,
} from "@chakra-ui/core";

import Button from './Button';
import ButtonLink from './ButtonLink';
import Fade from './Fade';
import FormInput from './FormInput';


const SignUp = ({ toggleSignIn, fade }) => {
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade} align="center" justify="center">
      <Stack spacing={5} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1">Welcome to Whisperer</Heading>

        <Stack spacing={3} align="flex-start" justify="center">
          <FormInput inputId="name" label="Name" placeholder="Your name" />
          <FormInput inputId="email" label="Email Address" placeholder="Your email" type="email" />
          <FormInput inputId="password" label="Password" placeholder="Your password" type="password" />
          <FormInput inputId="confirmPassword" label="Confirm Password" placeholder="Confirm password" type="password" />
        </Stack>

        <Button><span>Create Account</span></Button>

        <ButtonLink onClick={goToSignUp}>
          Have an account? Click here to Sign in
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignUp;
