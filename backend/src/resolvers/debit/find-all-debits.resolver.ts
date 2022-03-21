import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllDebitsService as IFindAllDebitsService } from '@/interfaces/debit/find-all-debits.interface';
import { FindAllDebitsService } from '@/services/debit/find-all-debits.service';
import FindAllDebitsInput from '@/services/debit/filters/find-all-debits.input';
import CategoryReceivementPaginate from './paginate/category-receivements-input.paginate';

@Resolver(() => CategoryReceivementPaginate)
export class FindAllDebitsResolver {
  constructor(
    @Inject(FindAllDebitsService) private findAllDebits: IFindAllDebitsService,
  ) { }
  @Query(() => CategoryReceivementPaginate)
  async debits(@Args('input') input: FindAllDebitsInput,): ReturnType<FindAllDebitsService['find']> {
    return this.findAllDebits.find(input);
  }
}
