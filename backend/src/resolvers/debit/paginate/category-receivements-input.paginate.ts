import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { ObjectType } from '@nestjs/graphql';
import PaginationFactory from '../../../shared/pagination.factory'

@ObjectType()
export default class CategoryReceivementPaginate extends PaginationFactory(CategoryReceivement) { }