import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { DeleteCategoryReceivementService as IDeleteCategoryReceivementService } from '@/interfaces/category-receivement/delete-category-receivement.interface';
import { DeleteCategoryReceivementService } from '@/services/category-receivement/delete-category-receivement.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => CategoryReceivement)
export class DeleteCategoryReceivementResolver {
  constructor(
    @Inject(DeleteCategoryReceivementService) private deleteCategoryReceivementService: IDeleteCategoryReceivementService,
  ) { }
  @Mutation(() => Boolean)
  async deleteCategoryReceivement(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteCategoryReceivementService.delete(id);
  }
}
