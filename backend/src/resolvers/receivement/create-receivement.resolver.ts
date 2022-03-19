import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Receivement } from '@/database/entities/receivement.entity';
import { CreateReceivementInput } from '@/inputs/receivement/create-receivement.input';
import { CreateReceivementService as ICreateReceivementService } from '@/interfaces/receivement/create-receivement.interface';
import { CreateReceivementService } from '@/services/receivement/create-receivement.service';

@Resolver(() => Receivement)
export class CreateReceivementResolver {
  constructor(
    @Inject(CreateReceivementService) private createReceivementService: ICreateReceivementService,
  ) { }

  @Mutation(() => Receivement)
  async createReceivement(@Args('input') input: CreateReceivementInput): Promise<Receivement> {
    return this.createReceivementService.create(input);
  }
}
