import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { UpdateReceivementInput } from '@/inputs/receivement/update-receivement.input';
import { UpdateReceivementService } from '@/services/receivement/update-receivement.service';
import { UpdateReceivementResolver } from './update-receivement.resolver';

jest.mock('@/services/receivement/update-receivement.service');
describe('UpdateReceivementResolver', () => {
  type SutTypes = { sut: UpdateReceivementResolver; service: UpdateReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateReceivementService, UpdateReceivementResolver],
    }).compile();
    const resolver = moduleRef.get<UpdateReceivementResolver>(UpdateReceivementResolver);
    const service = moduleRef.get<UpdateReceivementService>(UpdateReceivementService);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should update a Receivement', async () => {
    const { sut, service } = await makeSut();
    const input: UpdateReceivementInput = {
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    await sut.updateReceivement(Receivement.id, input);
    expect(service.update).toHaveBeenCalledWith(Receivement.id, input);
  });
});
