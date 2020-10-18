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
