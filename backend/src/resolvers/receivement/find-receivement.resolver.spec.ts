import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { FindReceivementService } from '@/services/receivement/find-receivement.service';
import { FindReceivementResolver } from './find-receivement.resolver';

jest.mock('@/services/receivement/find-receivement.service');
describe('FindReceivementResolver', () => {
  type SutTypes = { sut: FindReceivementResolver; service: FindReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindReceivementService, FindReceivementResolver],
    }).compile();
    const service = moduleRef.get<FindReceivementService>(FindReceivementService);
    const resolver = moduleRef.get<FindReceivementResolver>(FindReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find a Receivement by id', async () => {
    const { sut, service } = await makeSut();
    expect(await sut.receivement(Receivement.id)).toBe(Receivement);
    expect(service.findById).toHaveBeenCalledWith(Receivement.id);
  });
});
