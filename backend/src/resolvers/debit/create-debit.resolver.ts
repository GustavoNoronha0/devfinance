import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Debit } from '@/database/entities/debit.entity';
import { CreateDebitInput } from '@/inputs/debit/create-debit.input';
import { CreateDebitService as ICreateDebitService } from '@/interfaces/debit/create-debit.interface';
import { CreateDebitService } from '@/services/debit/create-debit.service';

@Resolver(() => Debit)
export class CreateDebitResolver {
  constructor(
    @Inject(CreateDebitService) private createDebitService: ICreateDebitService,
  ) { }

  @Mutation(() => Debit)
  async createDebit(@Args('input') input: CreateDebitInput): Promise<Debit> {
    return this.createDebitService.create(input);
  }
}
