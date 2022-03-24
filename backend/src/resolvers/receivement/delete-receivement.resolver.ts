import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Receivement } from '@/database/entities/receivement.entity';
import { DeleteReceivementService as IDeleteReceivementService } from '@/interfaces/receivement/delete-receivement.interface';
import { DeleteReceivementService } from '@/services/receivement/delete-receivement.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Receivement)
export class DeleteReceivementResolver {
  constructor(
    @Inject(DeleteReceivementService) private deleteReceivementService: IDeleteReceivementService,
  ) { }
  @Mutation(() => Boolean)
  async deleteReceivement(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteReceivementService.delete(id);
  }
}
