import { Injectable } from '@nestjs/common';
import { Debit } from '@/database/entities/debit.entity';
import { paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import { Connection } from 'typeorm';
import FindAllDebitsInput from './filters/find-all-debits.input';

@Injectable()
export class FindAllDebitsService {
  constructor(private connection: Connection) { }
  async find(input: FindAllDebitsInput): Promise<Pagination<Debit>> {
    const queryBuilder = this.connection.createQueryBuilder();
    queryBuilder.from((innerQueryBuilder) => {
      innerQueryBuilder
        .select([
          'debit.id', 
          'debit.title', 
          'debit.description',
          'debit.value',
          'debit.date',
          'debit.createdAt',
          'debit.updatedAt'
        ])
        .from(Debit, 'debit')
        .leftJoinAndSelect('debit.account', 'account')
        .leftJoinAndSelect('debit.categoryDebit', 'categoryDebit')
        .where('account.id = :accountId', { accountId: input.filters.account });
      const shouldFilterByDate =
        input.filters?.initialDate && input.filters?.finalDate;
      const hasOnlyCreatedAtGte =
        input.filters?.initialDate && !input.filters?.finalDate;
      if (hasOnlyCreatedAtGte) {
        innerQueryBuilder.andWhere(
          'debit.createdAt >= :initialDate',
          {
            initialDate: input.filters!.initialDate,
          },
        );
      }
      if (shouldFilterByDate) {
        innerQueryBuilder.andWhere(
          'debit.createdAt BETWEEN :initialDate AND :finalDate',
          {
            initialDate: input.filters!.initialDate,
            finalDate: input.filters!.finalDate,
          },
        );
      }
      if (input.filters?.category) {
        innerQueryBuilder.andWhere(
          'categoryDebit.title = :category',
          { category: input.filters!.category },
        );
      }
      if (input.filters?.other) {
        innerQueryBuilder.andWhere(
          '(debit.title ILIKE :other OR debit.description ILIKE :other)',
          { other: `%${input.filters!.other}%` },
        );
      }
      return innerQueryBuilder;
    }, 'debit');
    const pagination = await paginateRaw(queryBuilder, input.paginate);
    // @ts-ignore
    pagination.items = pagination.items.map((item) => ({
      id: item.debit_id,
      title: item.debit_title,
      categoryDebit: { title: item.categoryDebit_title },
      description: item.debit_description,
      value: item.debit_value,
      date: item.debit_date,
      createdAt: item.debit_createdAt,
      updatedAt: item.debit_updatedAt
    }));
    return pagination;
  }
}
