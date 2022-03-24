import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { DeleteCategoryDebitService as IDeleteCategoryDebitService } from '@/interfaces/category-debit/delete-category-debit.interface';
import { DeleteCategoryDebitService } from '@/services/category-debit/delete-category-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryDebit)
export class DeleteCategoryDebitResolver {
  constructor(
    @Inject(DeleteCategoryDebitService) private deleteCategoryDebitService: IDeleteCategoryDebitService,
  ) { }
  @Mutation(() => Boolean)
  async deleteCategoryDebit(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteCategoryDebitService.delete(id);
  }
}
