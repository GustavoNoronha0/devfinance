import { Receivement } from './receivement.interface';

export interface FindAllReceivementsService {
  find(account: string): Promise<Receivement[]>;
}
