import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { CreateCategoryReceivementService } from './create-category-receivement.service';
import { CategoryReceivementInput } from '@/interfaces/category-receivement/create-category-receivement.interface';

jest.mock('@/repositories/category-receivement.repository');
describe('CreateCategoryReceivementService', () => {
  type SutTypes = { sut: CreateCategoryReceivementService; repository: CategoryReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryReceivementRepository, CreateCategoryReceivementService],
    }).compile();
    const service = moduleRef.get<CreateCategoryReceivementService>(CreateCategoryReceivementService);
    const repository = moduleRef.get<CategoryReceivementRepository>(CategoryReceivementRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a CategoryReceivement', async () => {
    const { sut, repository } = await makeSut();
    const categoryReceivementCreateInput: CategoryReceivementInput = {
      account: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.random.words(),
    };
    expect(await sut.create(categoryReceivementCreateInput)).toBe(CategoryReceivement);
    expect(repository.save).toHaveBeenCalledWith(categoryReceivementCreateInput);
  });
});
