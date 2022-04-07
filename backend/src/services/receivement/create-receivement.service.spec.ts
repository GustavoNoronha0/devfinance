import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { CreateReceivementService } from './create-receivement.service';
import { ReceivementInput } from '@/interfaces/receivement/create-receivement.interface';

jest.mock('@/repositories/receivement.repository');
describe('CreateReceivementService', () => {
  type SutTypes = { sut: CreateReceivementService; repository: ReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReceivementRepository, CreateReceivementService],
    }).compile();
    const service = moduleRef.get<CreateReceivementService>(CreateReceivementService);
    const repository = moduleRef.get<ReceivementRepository>(ReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a Receivement', async () => {
    const { sut, repository } = await makeSut();
    const receivementCreateInput: ReceivementInput = {
      account: faker.random.uuid(),
      categoryReceivement: faker.random.word(),
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.create(receivementCreateInput)).toBe(Receivement);
    expect(repository.save).toHaveBeenCalledWith(receivementCreateInput);
  });
});
