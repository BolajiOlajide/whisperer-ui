import gql from 'graphql-tag';


export const SIGN_UP_MUTATION = gql`
mutation SIGN_UP_MUTATION(
  $name: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
) {
  createUser(
    payload: {
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    }
  ) {
    token
  }
}
`;

export const SIGN_IN_MUTATION = gql`
mutation SIGN_IN_MUTATION(
  $email: String!
  $password: String!
) {
  signin(
    payload: {
      email: $email
      password: $password
    }
  ) {
    token
  }
}
`;

export const NOOB_QUERY = gql`
query NOOB_QUERY {
  noob
}
`;

export const FETCH_WHISPER_QUERY = gql`
query FETCH_WHISPER_QUERY {
  whispers {
    id
    text
    whisperer {
      username
    }
  }
}
`;
