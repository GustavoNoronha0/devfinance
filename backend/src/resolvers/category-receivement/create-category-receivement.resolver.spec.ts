import { Test } from '@nestjs/testing';
import faker from 'faker';
import { CategoryReceivement } from '@/database/entities/__mocks__/category-receivement.entity';
import { CreateCategoryReceivementService } from '@/services/category-receivement/create-category-receivement.service';
import { CreateCategoryReceivementResolver } from './create-category-receivement.resolver';
import { CategoryReceivementInput } from '@/interfaces/category-receivement/create-category-receivement.interface';

jest.mock('@/services/create-category-receivement.service');
describe('CreateCategoryReceivementResolver', () => {
  type SutTypes = { sut: CreateCategoryReceivementResolver; service: CreateCategoryReceivementService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [CreateCategoryReceivementService, CreateCategoryReceivementResolver],
    }).compile();
    const service = moduleRef.get<CreateCategoryReceivementService>(CreateCategoryReceivementService);
    const resolver = moduleRef.get<CreateCategoryReceivementResolver>(CreateCategoryReceivementResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should create a CategoryReceivement', async () => {
    const { sut, service } = await makeSut();
    const input: CategoryReceivementInput = {
      account: faker.random.uuid(),
      title: faker.random.words(),
      description: faker.internet.email(),
    };
    expect(await sut.createCategoryReceivement(input)).toBe(CategoryReceivement);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
