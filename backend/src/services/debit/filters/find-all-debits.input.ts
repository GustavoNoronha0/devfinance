import { Field, InputType } from '@nestjs/graphql';
import PaginateInput from '../../../shared/paginate.input';
import FindAllDebitsFilters from './find-all-debits-filters.input';

@InputType()
export default class FindAllDebitsInput {
  @Field(() => FindAllDebitsFilters)
  filters: FindAllDebitsFilters;

  @Field(() => PaginateInput)
  paginate: PaginateInput;
}