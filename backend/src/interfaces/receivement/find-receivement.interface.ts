import { Receivement } from './receivement.interface';

export interface FindReceivementService {
  findById(id: string): Promise<Receivement | null>;
}
