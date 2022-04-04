import { gql } from '@apollo/client';

const createCategoryReceivementMutation = gql`
  mutation CreateCategoryReceivementMutation($input: CreateCategoryReceivementInput!) {
    createCategoryReceivement(input: $input) {
      id
    }
  }
`;

export default createCategoryReceivementMutation