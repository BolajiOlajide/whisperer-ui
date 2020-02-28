import gql from 'graphql-tag';


export const SIGN_UP_MUTATION = gql`
mutation SIGN_UP_MUTATION(
  $firstname: String!
  $lastname: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
) {
  createUser(
    payload: {
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    }
  ) {
    token
    user {
      id
      username
    }
  }
}
`;

export const SIGN_IN_MUTATION = gql`
mutation SIGN_IN_MUTATION(
  $email: String!
  $password: String!
) {
  signin(
    email: $email
    password: $password
  ) {
    token
    user {
      id
      username
    }
  }
}
`;
