import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Debit } from '@/database/entities/debit.entity';
import { UpdateDebitInput } from '@/inputs/debit/update-debit.input';
import { UpdateDebitService as IUpdateDebitService } from '@/interfaces/debit/update-debit.interface';
import { UpdateDebitService } from '@/services/debit/update-debit.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Debit)
export class UpdateDebitResolver {
  constructor(
    @Inject(UpdateDebitService) private updateDebitService: IUpdateDebitService,
  ) { }
  @Mutation(() => Debit)
  async updateDebit(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateDebitInput,
  ): Promise<Debit> {
    return this.updateDebitService.update(id, input);
  }
}
