import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { DeleteAccountService } from '@/services/account/delete-account.service';
import { DeleteAccountResolver } from './delete-account.resolver';

jest.mock('@/services/account/delete-account.service');
describe('DeleteAccountResolver', () => {
  type SutTypes = { sut: DeleteAccountResolver; service: DeleteAccountService };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeleteAccountService, DeleteAccountResolver],
    }).compile();
    const service = moduleRef.get<DeleteAccountService>(DeleteAccountService);
    const resolver = moduleRef.get<DeleteAccountResolver>(DeleteAccountResolver);
    const sutTypes = { service, sut: resolver };
    return sutTypes;
  };
  it('should delete a Account', async () => {
    const { sut, service } = await makeSut();
    await sut.deleteAccount(Account.id);
    expect(service.delete).toHaveBeenCalledWith(Account.id);
  });
});
