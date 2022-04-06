import { gql } from '@apollo/client';

const deleteCategoryDebitMutation = gql`
  mutation DeleteCategoryDebit($id: ID!) {
    deleteCategoryDebit(id: $id)
  }
`;

export default deleteCategoryDebitMutation;