import { Debit } from '@/database/entities/debit.entity';
import { ObjectType } from '@nestjs/graphql';
import PaginationFactory from '../../../shared/pagination.factory'

@ObjectType()
export default class DebitPaginate extends PaginationFactory(Debit) { }