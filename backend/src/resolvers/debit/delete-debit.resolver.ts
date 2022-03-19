import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Debit } from '@/database/entities/debit.entity';
import { DeleteDebitService as IDeleteDebitService } from '@/interfaces/debit/delete-debit.interface';
import { DeleteDebitService } from '@/services/debit/delete-debit.service';

@Resolver(() => Debit)
export class DeleteDebitResolver {
  constructor(
    @Inject(DeleteDebitService) private deleteDebitService: IDeleteDebitService,
  ) { }
  @Mutation(() => Boolean)
  async deleteDebit(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteDebitService.delete(id);
  }
}
