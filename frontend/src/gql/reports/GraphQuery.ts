import { gql } from '@apollo/client';

const graphQuery = gql`
  query GraphQuery($account: ID!) {
    graphAccount(account: $account) {
      countDebit
      countReceivement
      countTotal
    }
  }
`;

export default graphQuery;