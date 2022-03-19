import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { DeleteReceivementService } from '@/services/receivement/delete-receivement.service';
import { DeleteReceivementResolver } from './delete-receivement.resolver';

jest.mock('@/services/receivement/delete-receivement.service');
describe('DeleteReceivementResolver', () => {
  type SutTypes = { sut: DeleteReceivementResolver; service: DeleteReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteReceivementService, DeleteReceivementResolver],
    }).compile();
    const service = moduleRef.get<DeleteReceivementService>(DeleteReceivementService);
    const resolver = moduleRef.get<DeleteReceivementResolver>(DeleteReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should delete a Receivement', async () => {
    const { sut, service } = await makeSut();
    await sut.deleteReceivement(Receivement.id);
    expect(service.delete).toHaveBeenCalledWith(Receivement.id);
  });
});
