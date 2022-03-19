import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { CreateReceivementService } from '@/services/receivement/create-receivement.service';
import { CreateReceivementResolver } from './create-receivement.resolver';
import { ReceivementInput } from '@/interfaces/receivement/create-receivement.interface';

jest.mock('@/services/receivement/create-receivement.service');
describe('CreateReceivementResolver', () => {
  type SutTypes = { sut: CreateReceivementResolver; service: CreateReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateReceivementService, CreateReceivementResolver],
    }).compile();
    const service = moduleRef.get<CreateReceivementService>(CreateReceivementService);
    const resolver = moduleRef.get<CreateReceivementResolver>(CreateReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should create a Receivement', async () => {
    const { sut, service } = await makeSut();
    const input: ReceivementInput = {
      account: faker.random.uuid(),
      categoryReceivement: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.createReceivement(input)).toBe(Receivement);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
