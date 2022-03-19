import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { UpdateCategoryReceivementInput } from '@/inputs/category-receivement/update-category-receivement.input';
import { UpdateCategoryReceivementService } from '@/services/category-receivement/update-category-receivement.service';
import { UpdateCategoryReceivementResolver } from './update-category-receivement.resolver';

jest.mock('@/services/category-receivement/update-category-receivement.service');
describe('UpdateCategoryReceivementResolver', () => {
  type SutTypes = { sut: UpdateCategoryReceivementResolver; service: UpdateCategoryReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [UpdateCategoryReceivementService, UpdateCategoryReceivementResolver],
    }).compile();
    const resolver = moduleRef.get<UpdateCategoryReceivementResolver>(UpdateCategoryReceivementResolver);
    const service = moduleRef.get<UpdateCategoryReceivementService>(UpdateCategoryReceivementService);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should update a CategoryReceivement', async () => {
    const { sut, service } = await makeSut();
    const input: UpdateCategoryReceivementInput = {
      title: faker.random.words(),
      description: faker.random.words(),
    };
    await sut.updateCategoryReceivement(CategoryReceivement.id, input);
    expect(service.update).toHaveBeenCalledWith(CategoryReceivement.id, input);
  });
});
