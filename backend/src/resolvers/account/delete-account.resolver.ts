import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { DeleteAccountService as IDeleteAccountService } from '@/interfaces/account/delete-account.interface';
import { DeleteAccountService } from '@/services/account/delete-account.service';

@Resolver(() => Account)
export class DeleteAccountResolver {
  constructor(
    @Inject(DeleteAccountService) private deleteAccountService: IDeleteAccountService,
  ) { }
  @Mutation(() => Boolean)
  async deleteAccount(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteAccountService.delete(id);
  }
}
