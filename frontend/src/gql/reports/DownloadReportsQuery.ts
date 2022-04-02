import { gql } from '@apollo/client';

const DownloadReportsQuery = gql`
  query DownloadReportsQuery($account: ID!) {
    download-reports(account: $account) {
      countDebit
      countReceivement
      countTotal
    }
  }
`;

export default DownloadReportsQuery;