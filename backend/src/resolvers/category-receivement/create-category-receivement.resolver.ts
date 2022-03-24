import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { CreateCategoryReceivementInput } from '@/inputs/category-receivement/create-category-receivement.input';
import { CreateCategoryReceivementService as ICreateCategoryReceivementService } from '@/interfaces/category-receivement/create-category-receivement.interface';
import { CreateCategoryReceivementService } from '@/services/category-receivement/create-category-receivement.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryReceivement)
export class CreateCategoryReceivementResolver {
  constructor(
    @Inject(CreateCategoryReceivementService) private createCategoryReceivementService: ICreateCategoryReceivementService,
  ) { }

  @Mutation(() => CategoryReceivement)
  async createCategoryReceivement(@Args('input') input: CreateCategoryReceivementInput): Promise<CategoryReceivement> {
    return this.createCategoryReceivementService.create(input);
  }
}
