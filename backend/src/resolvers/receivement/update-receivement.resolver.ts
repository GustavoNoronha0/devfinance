import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Receivement } from '@/database/entities/receivement.entity';
import { UpdateReceivementInput } from '@/inputs/receivement/update-receivement.input';
import { UpdateReceivementService as IUpdateReceivementService } from '@/interfaces/receivement/update-receivement.interface';
import { UpdateReceivementService } from '@/services/receivement/update-receivement.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Receivement)
export class UpdateReceivementResolver {
  constructor(
    @Inject(UpdateReceivementService) private updateReceivementService: IUpdateReceivementService,
  ) { }
  @Mutation(() => Receivement)
  async updateReceivement(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateReceivementInput,
  ): Promise<Receivement> {
    return this.updateReceivementService.update(id, input);
  }
}
