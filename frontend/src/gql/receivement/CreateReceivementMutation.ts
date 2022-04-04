import { gql } from '@apollo/client';

const createReceivementMutation = gql`
  mutation CreateReceivementMutation($input: CreateReceivementInput!) {
    createReceivement(input: $input) {
      id
    }
  }
`;

export default createReceivementMutation