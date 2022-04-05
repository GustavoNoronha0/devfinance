import { gql } from '@apollo/client';

const listCategoryReceivementsQuery = gql`
  query ListCategoryReceivementsquery($input: FindAllCategoryReceivementsInput!) {
    categoryReceivements(input: $input) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      meta {
        totalItems
        itemCount
        totalPages
        currentPage
      }
    }
  }
`;

export default listCategoryReceivementsQuery;