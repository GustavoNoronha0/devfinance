import { gql } from '@apollo/client';

const reportsQuery = gql`
  query ReportsQuery($account: ID!) {
    reportsAccount(account: $account) {
      amountDebit
      amountReceivement
      amountTotal
    }
  }
`;

export default reportsQuery;