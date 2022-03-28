import { gql } from '@apollo/client';

const LoginMutation = gql`
  mutation AuthMutation($input: AuthInput!) {
    login(input: $input) {
      account {
        id
        name
        email
      }	
      jwt {
        accessToken
      }
    }
  }
`;

export default LoginMutation;