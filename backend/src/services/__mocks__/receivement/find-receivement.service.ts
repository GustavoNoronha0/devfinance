import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
export class FindReceivementService {
  findById = jest.fn(() => Receivement);
}
