import { gql } from '@apollo/client';

const listReceivementsQuery = gql`
  query ListReceivementsquery($input: FindAllReceivementsInput!) {
    receivements(input: $input) {
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

export default listReceivementsQuery;