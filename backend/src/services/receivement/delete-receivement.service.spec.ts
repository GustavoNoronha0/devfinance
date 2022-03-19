import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { DeleteReceivementService } from '@/services/receivement/delete-receivement.service';

jest.mock('@/repositories/receivement.repository');
describe('DeleteReceivementService', () => {
  type SutTypes = { sut: DeleteReceivementService; repository: ReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReceivementRepository, DeleteReceivementService],
    }).compile();
    const service = moduleRef.get<DeleteReceivementService>(DeleteReceivementService);
    const repository = moduleRef.get<ReceivementRepository>(ReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a Receivement', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(Receivement.id);
    expect(repository.remove).toHaveBeenCalledWith(Receivement);
  });
});
