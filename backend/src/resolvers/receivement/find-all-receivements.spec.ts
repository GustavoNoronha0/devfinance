import { Test } from '@nestjs/testing';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { FindAllReceivementsService } from '@/services/receivement/find-all-receivements.service';
import { FindAllReceivementsResolver } from './find-all-receivements.resolver';

jest.mock('@/services/receivement/find-all-receivements.service');
describe('FindAllReceivementsResolver', () => {
  type SutTypes = { sut: FindAllReceivementsResolver; service: FindAllReceivementsService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindAllReceivementsService, FindAllReceivementsResolver],
    }).compile();
    const service = moduleRef.get<FindAllReceivementsService>(FindAllReceivementsService);
    const resolver = moduleRef.get<FindAllReceivementsResolver>(FindAllReceivementsResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should find all Receivement', async () => {
    const { sut } = await makeSut();
    expect(await sut.receivements(Receivement.id)).toMatchObject([Receivement]);
  });
});
