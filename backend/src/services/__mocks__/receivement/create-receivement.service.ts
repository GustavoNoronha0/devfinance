import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
export class CreateReceivementService {
  create = jest.fn(() => Receivement);
}
