import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/core";

import Button from './Button';
import Input from './Input';
import ButtonLink from './ButtonLink';
import Fade from './Fade';
import FormInput from './FormInput';


const SignUp = ({ toggleSignIn, fade }) => {
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade}>
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%" as="fieldset">
        <Heading as="h1">Welcome to Whisper</Heading>

        <FormInput inputId="firstname" label="First Name" placeholder="Your firstname" />
        <FormInput inputId="lastname" label="Last Name" placeholder="Your lastname" />
        <FormInput inputId="email" label="Email Address" placeholder="Your email" type="email" />
        <FormInput inputId="password" label="Password" placeholder="Your password" type="password" />
        <FormInput inputId="confirmPassword" label="Confirm Password" placeholder="Confirm password" type="password" />

        <Button><span>Create Account</span></Button>

        <ButtonLink onClick={goToSignUp}>
          Have an account? Click here to Sign in
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignUp;
