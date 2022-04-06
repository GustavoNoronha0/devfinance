import { gql } from '@apollo/client';

const deleteCategoryReceivementMutation = gql`
  mutation DeleteCategoryReceivement($id: ID!) {
    deleteCategoryReceivement(id: $id)
  }
`;

export default deleteCategoryReceivementMutation;