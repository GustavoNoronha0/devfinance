import { gql } from '@apollo/client';

const deleteReceivementMutation = gql`
  mutation DeleteReceivement($id: ID!) {
    deleteReceivement(id: $id)
  }
`;

export default deleteReceivementMutation;