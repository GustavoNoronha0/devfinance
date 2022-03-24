import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { UpdateCategoryDebitInput } from '@/inputs/category-debit/update-category-debit.input';
import { UpdateCategoryDebitService as IUpdateCategoryDebitService } from '@/interfaces/category-debit/update-category-debit.interface';
import { UpdateCategoryDebitService } from '@/services/category-debit/update-category-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryDebit)
export class UpdateCategoryDebitResolver {
  constructor(
    @Inject(UpdateCategoryDebitService) private updateCategoryDebitService: IUpdateCategoryDebitService,
  ) { }
  @Mutation(() => CategoryDebit)
  async updateCategoryDebit(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateCategoryDebitInput,
  ): Promise<CategoryDebit> {
    return this.updateCategoryDebitService.update(id, input);
  }
}
