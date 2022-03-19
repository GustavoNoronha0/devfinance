import { Receivement } from './receivement.interface';

export type UpdateReceivementInput = Partial<Pick<Receivement, 'title' | 'description' | 'value'>>;

export interface UpdateReceivementService {
  update(id: string, input: UpdateReceivementInput): Promise<Receivement>;
}
