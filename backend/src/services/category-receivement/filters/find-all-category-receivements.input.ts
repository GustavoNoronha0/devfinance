import { Field, InputType } from '@nestjs/graphql';
import PaginateInput from '../../../shared/paginate.input';
import FindAllCategoryReceivementsFilters from './find-all-category-receivements-filters.input';

@InputType()
export default class FindAllCategoryReceivementsInput {
  @Field(() => FindAllCategoryReceivementsFilters)
  filters: FindAllCategoryReceivementsFilters;

  @Field(() => PaginateInput)
  paginate: PaginateInput;
}