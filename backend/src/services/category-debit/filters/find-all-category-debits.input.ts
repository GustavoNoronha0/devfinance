import { Field, InputType } from '@nestjs/graphql';
import PaginateInput from '../../../shared/paginate.input';
import FindAllCategoryDebitsFilters from './find-all-category-debits-filters.input';

@InputType()
export default class FindAllCategoryDebitsInput {
  @Field(() => FindAllCategoryDebitsFilters)
  filters: FindAllCategoryDebitsFilters;

  @Field(() => PaginateInput)
  paginate: PaginateInput;
}