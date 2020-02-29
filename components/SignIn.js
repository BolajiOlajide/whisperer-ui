import {
  Stack,
  Heading,
  FormErrorMessage,
  Spinner
} from '@chakra-ui/core';
import { useMutation } from '@apollo/react-hooks';

import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import Fade from './Fade';
import useInput from '../hooks/useInput';
import FormInput from './FormInput';
import { SIGN_IN_MUTATION } from '../graphql';


const SignIn = ({ toggleSignIn, fade }) => {
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }

  const [signIn, { loading, error, data }] = useMutation(SIGN_IN_MUTATION)

  const { bind: bindEmail, value: email, reset: resetEmail } = useInput('bolaji@proton.me');
  const { bind: bindPassword, value: password, reset: resetPassword } = useInput('bolaji123');

  const _onSubmit = async (e) => {
    console.log('submittting')
    e.preventDefault();

    console.log(email, password);
    await signIn({ email, password });

    console.log(data, '<=== data')

    resetEmail();
    resetPassword();
  }
  console.log(loading, 'loading <-==')

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade} onSubmit={_onSubmit}>
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1">Welcome to Whisper</Heading>

        <FormInput
          inputId="signInEmail"
          label="Email Address"
          placeholder="Your email"
          type="email"
          {...bindEmail}
        />

        <FormInput
          inputId="signInPassword"
          label="Password"
          placeholder="Your password"
          type="password"
          {...bindPassword}
        />

        <FormErrorMessage>Sorry o!</FormErrorMessage>
        {
          loading ? <Spinner size="xl" /> : <Button disabled={loading}><span>Sign In</span></Button>
        }

        <ButtonLink onClick={goToSignUp}>
          Don't have an account? Click here to Sign up for one.
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignIn;
