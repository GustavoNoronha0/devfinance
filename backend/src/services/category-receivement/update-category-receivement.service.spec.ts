import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { UpdateCategoryReceivementInput } from '@/inputs/category-receivement/update-category-receivement.input';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { UpdateCategoryReceivementService } from './update-category-receivement.service';

jest.mock('@/repositories/category-receivement.repository');
describe('UpdateCategoryReceivementService', () => {
  type SutTypes = { sut: UpdateCategoryReceivementService; repository: CategoryReceivementRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CategoryReceivementRepository, UpdateCategoryReceivementService],
    }).compile();
    const repository = moduleRef.get<CategoryReceivementRepository>(CategoryReceivementRepository);
    const service = moduleRef.get<UpdateCategoryReceivementService>(UpdateCategoryReceivementService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should update a CategoryReceivement', async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateCategoryReceivementInput = {
      title: faker.random.words(),
      description: faker.random.words()
    };
    expect(await sut.update(CategoryReceivement.id, input)).toBe(CategoryReceivement);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(CategoryReceivement, input));
  });
});
