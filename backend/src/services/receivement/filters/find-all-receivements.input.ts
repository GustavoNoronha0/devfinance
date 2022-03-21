import { Field, InputType } from '@nestjs/graphql';
import PaginateInput from '../../../shared/paginate.input';
import FindAllReceivementsFilters from './find-all-receivements-filters.input';

@InputType()
export default class FindAllReceivementsInput {
  @Field(() => FindAllReceivementsFilters)
  filters: FindAllReceivementsFilters;

  @Field(() => PaginateInput)
  paginate: PaginateInput;
}