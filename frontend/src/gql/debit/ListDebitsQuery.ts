import { gql } from '@apollo/client';

const listDebitsQuery = gql`
  query ListDebitsquery($input: FindAllDebitsInput!) {
    debits(input: $input) {
      items {
        id
        title
        category
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

export default listDebitsQuery;