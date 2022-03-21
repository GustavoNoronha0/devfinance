import { AccountReports } from './account-reports.interface';

export interface FindAccountReportsService {
  findReports(account: string): Promise<AccountReports>;
}
