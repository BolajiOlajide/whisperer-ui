import {
  Stack,
  Heading,
  FormErrorMessage,
  Spinner
} from '@chakra-ui/core';
import useToast from '@chakra-ui/core/dist/Toast';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Button from './Button';
import ButtonLink from './ButtonLink';
import Fade from './Fade';
import FormInput from './FormInput';

import useInput from '../hooks/useInput';
import { SIGN_IN_MUTATION } from '../graphql';
import { WHISPER_TOKEN } from '../constants';


const SignIn = ({ toggleSignIn, fade }) => {
  const toast = useToast();
  const router = useRouter();
  const [userSignIn, { data, loading, client }] = useMutation(SIGN_IN_MUTATION);
  const goToSignUp = (event) => {
    event.preventDefault();
    toggleSignIn(prevValue => !prevValue);
  }
  const { bind: bindEmail, value: email, reset: resetEmail } = useInput('bolaji@proton.com');
  const { bind: bindPassword, value: password, reset: resetPassword } = useInput('bolaji');

  const displayError = (errorMessage) => toast({
    title: 'Sign in Error!',
    description: errorMessage,
    status: "error",
    duration: 4000,
    isClosable: true,
  });

  const _onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!email || !password) {
        return displayError('Email and password fields are required');
      }

      const { data } = await userSignIn({ variables: { email, password } });
      console.log(client);
      client.link.request(operation => {
        console.log(operation, '<=== operation')
        operation.setContext({ Authorization: data.signin.token })
      });

      // client.link.request(operation => {
      //   console.log(operation);
      //   operation.setContext({
      //     headers: {
      //       Authorization: data.signin.token
      //     }
      //   })
      // });
      resetEmail();
      resetPassword();
      // localStorage.setItem(WHISPER_TOKEN, data.signin.token);
      // router.push('/timeline');
    } catch (error) {
      console.log(error)
      displayError(error.message)
    }
  }

  return (
    <Fade w="100%" h="100%" as="form" method="POST" in={fade} onSubmit={_onSubmit} align="center" justify="center">
      <Stack spacing={6} w="100%" align="center" justify="center" h="100%">
        <Heading as="h1" color="green.700">Welcome to Whisperer</Heading>

        <Stack spacing={3} align="flex-start" justify="center">
          <FormInput
            inputId="signInEmail"
            label="Email Address"
            placeholder="Your email"
            type="email"
            {...bindEmail}
            isRequired
            disabled={loading}
          />

          <FormInput
            inputId="signInPassword"
            label="Password"
            placeholder="Your password"
            type="password"
            {...bindPassword}
            isRequired
            disabled={loading}
          />
        </Stack>

        <FormErrorMessage>Sorry o!</FormErrorMessage>
        {
          loading ? <Spinner size="md" /> : <Button disabled={loading}><span>Sign In</span></Button>
        }

        <ButtonLink onClick={goToSignUp}>
          Don't have an account? Click here to Sign up for one.
        </ButtonLink>
      </Stack>
    </Fade>
  );
};

export default SignIn;
