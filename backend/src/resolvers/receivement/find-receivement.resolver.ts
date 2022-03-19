import { Inject } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Receivement } from '@/database/entities/receivement.entity';
import { FindReceivementService as IFindReceivementService } from '@/interfaces/receivement/find-receivement.interface';
import { FindReceivementService } from '@/services/receivement/find-receivement.service';

@Resolver(() => Receivement)
export class FindReceivementResolver {
  constructor(
    @Inject(FindReceivementService) private findReceivementService: IFindReceivementService,
  ) { }
  @Query(() => Receivement, { nullable: true })
  async receivement(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Receivement | undefined> {
    return this.findReceivementService.findById(id);
  }
}
