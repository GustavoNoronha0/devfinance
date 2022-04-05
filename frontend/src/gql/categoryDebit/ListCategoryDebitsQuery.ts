import { gql } from '@apollo/client';

const listCategoryDebitsQuery = gql`
  query ListCategoryDebitsquery($input: FindAllCategoryDebitsInput!) {
    categoryDebits(input: $input) {
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

export default listCategoryDebitsQuery;