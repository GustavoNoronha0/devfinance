import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { CreateCategoryDebitInput } from '@/inputs/category-debit/create-category-debit.input';
import { CreateCategoryDebitService as ICreateCategoryDebitService } from '@/interfaces/category-debit/create-category-debit.interface';
import { CreateCategoryDebitService } from '@/services/category-debit/create-category-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryDebit)
export class CreateCategoryDebitResolver {
  constructor(
    @Inject(CreateCategoryDebitService) private createCategoryDebitService: ICreateCategoryDebitService,
  ) { }

  @Mutation(() => CategoryDebit)
  async createCategoryDebit(@Args('input') input: CreateCategoryDebitInput): Promise<CategoryDebit> {
    return this.createCategoryDebitService.create(input);
  }
}
