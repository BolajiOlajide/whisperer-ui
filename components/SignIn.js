import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/core";

import Button from '../components/Button';
import Input from '../components/Input';
import ButtonLink from '../components/ButtonLink';
import Fade from './Fade';
import useInput from '../hooks/useInput';
import FormInput from './FormInput';


const SignIn = ({ toggleSignIn, fade }) => {
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }

  const { bind: bindEmail, value: email, reset: resetEmail } = useInput('');
  const { bind: bindPassword, value: password, reset: resetPassword } = useInput('');

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade}>
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%" as="fieldset">
        <Heading as="h1">Welcome to Whisper</Heading>

        <FormInput
          inputId="email"
          label="Email Address"
          placeholder="Your email"
          type="email"
          {...bindEmail}
        />

        <FormInput
          inputId="password"
          label="Password"
          placeholder="Your password"
          type="password"
          {...bindPassword}
        />

        <Button><span>Sign In</span></Button>

        <ButtonLink onClick={goToSignUp}>
          Don't have an account? Click here to Sign up for one.
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignIn;
