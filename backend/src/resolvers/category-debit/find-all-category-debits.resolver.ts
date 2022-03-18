import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { FindAllCategoryDebitsService as IFindAllCategoryDebitsService } from '@/interfaces/category-debit/find-all-category-debits.interface';
import { FindAllCategoryDebitsService } from '@/services/category-debit/find-all-category-debits.service';
import { Account } from '@/database/entities/account.entity';

@Resolver(() => CategoryDebit)
export class FindAllCategoryDebitsResolver {
  constructor(
    @Inject(FindAllCategoryDebitsService) private findAllCategoryDebits: IFindAllCategoryDebitsService,
  ) { }
  @Query(() => [CategoryDebit])
  async categoryDebits(@Args('account', { type: () => ID }) account: Account['id'],): Promise<CategoryDebit[]> {
    return this.findAllCategoryDebits.find(account);
  }
}
