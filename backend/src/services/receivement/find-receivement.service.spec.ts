import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { FindReceivementService } from './find-receivement.service';

jest.mock('@/repositories/receivement.repository');
describe('FindReceivementService', () => {
  type SutTypes = { sut: FindReceivementService; repository: ReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReceivementRepository, FindReceivementService],
    }).compile();
    const service = moduleRef.get<FindReceivementService>(FindReceivementService);
    const repository = moduleRef.get<ReceivementRepository>(ReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Receivement by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.findById(Receivement.id)).toBe(Receivement);
    expect(repository.findOne).toHaveBeenCalledWith(Receivement.id);
  });
});
