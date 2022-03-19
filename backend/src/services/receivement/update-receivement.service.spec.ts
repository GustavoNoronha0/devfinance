import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Receivement } from '@/database/entities/__mocks__/receivement.entity';
import { UpdateReceivementInput } from '@/inputs/receivement/update-receivement.input';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { UpdateReceivementService } from './update-receivement.service';

jest.mock('@/repositories/receivement.repository');
describe('UpdateReceivementService', () => {
  type SutTypes = { sut: UpdateReceivementService; repository: ReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReceivementRepository, UpdateReceivementService],
    }).compile();
    const repository = moduleRef.get<ReceivementRepository>(ReceivementRepository);
    const service = moduleRef.get<UpdateReceivementService>(UpdateReceivementService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should update a Receivement', async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateReceivementInput = {
      title: faker.random.words(),
      description: faker.random.words(),
      value: faker.random.number(),
      date: faker.date.future(),
    };
    expect(await sut.update(Receivement.id, input)).toBe(Receivement);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(Receivement, input));
  });
});
