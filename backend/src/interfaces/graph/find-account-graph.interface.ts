import { AccountGraph } from './account-graph.interface';

export interface FindAccountGraphService {
  findGraph(account: string): Promise<AccountGraph>;
}
