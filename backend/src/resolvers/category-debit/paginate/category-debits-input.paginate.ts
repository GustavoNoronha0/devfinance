import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { ObjectType } from '@nestjs/graphql';
import PaginationFactory from '../../../shared/pagination.factory'

@ObjectType()
export default class CategoryDebitPaginate extends PaginationFactory(CategoryDebit) { }