import { gql } from '@apollo/client';

const deleteDebitMutation = gql`
  mutation DeleteDebit($id: ID!) {
    deleteDebit(id: $id)
  }
`;

export default deleteDebitMutation;