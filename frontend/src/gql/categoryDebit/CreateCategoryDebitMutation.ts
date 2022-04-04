import { gql } from '@apollo/client';

const createCategoryDebitMutation = gql`
  mutation CreateCategoryDebitMutation($input: CreateCategoryDebitInput!) {
    createCategoryDebit(input: $input) {
      id
    }
  }
`;

export default createCategoryDebitMutation