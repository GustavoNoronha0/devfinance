import { Receivement } from './receivement.interface';

export interface ReceivementInput {
  account: string
  categoryReceivement: string
  title: string
  description: string
  value: number
  date: Date
}

export interface CreateReceivementService {
  create(input: ReceivementInput): Promise<Receivement>;
}
