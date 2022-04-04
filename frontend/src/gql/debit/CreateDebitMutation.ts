import { gql } from '@apollo/client';

const createDebitMutation = gql`
  mutation CreateDebitMutation($input: CreateDebitInput!) {
    createDebit(input: $input) {
      id
    }
  }
`;

export default createDebitMutation