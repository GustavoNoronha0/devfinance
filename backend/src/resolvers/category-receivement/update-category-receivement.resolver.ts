import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { UpdateCategoryReceivementInput } from '@/inputs/category-receivement/update-category-receivement.input';
import { UpdateCategoryReceivementService as IUpdateCategoryReceivementService } from '@/interfaces/category-receivement/update-category-receivement.interface';
import { UpdateCategoryReceivementService } from '@/services/category-receivement/update-category-receivement.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryReceivement)
export class UpdateCategoryReceivementResolver {
  constructor(
    @Inject(UpdateCategoryReceivementService) private updateCategoryReceivementService: IUpdateCategoryReceivementService,
  ) { }
  @Mutation(() => CategoryReceivement)
  async updateCategoryReceivement(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateCategoryReceivementInput,
  ): Promise<CategoryReceivement> {
    return this.updateCategoryReceivementService.update(id, input);
  }
}
