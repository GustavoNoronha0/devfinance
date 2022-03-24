import { Receivement } from '@/database/entities/receivement.entity';
import { ObjectType } from '@nestjs/graphql';
import PaginationFactory from '../../../shared/pagination.factory'

@ObjectType()
export default class ReceivementPaginate extends PaginationFactory(Receivement) { }