import { Injectable } from '@nestjs/common';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import { Connection } from 'typeorm';
import FindAllCategoryDebitsInput from './filters/find-all-category-debits.input';

@Injectable()
export class FindAllCategoryDebitsService {
  constructor(private connection: Connection) { }
  async find(input: FindAllCategoryDebitsInput): Promise<Pagination<CategoryDebit>> {
    const queryBuilder = this.connection.createQueryBuilder();
    queryBuilder.from((innerQueryBuilder) => {
      innerQueryBuilder
        .select([
          'categoryDebit.id', 
          'categoryDebit.title', 
          'categoryDebit.description',
          'categoryDebit.createdAt',
          'categoryDebit.updatedAt'
        ])
        .from(CategoryDebit, 'categoryDebit')
        .leftJoinAndSelect('categoryDebit.account', 'account')
        .where('account.id = :accountId', { accountId: input.filters.account });
      const shouldFilterByDate =
        input.filters?.initialDate && input.filters?.finalDate;
      const hasOnlyCreatedAtGte =
        input.filters?.initialDate && !input.filters?.finalDate;
      if (hasOnlyCreatedAtGte) {
        innerQueryBuilder.andWhere(
          'categoryDebit.createdAt >= :initialDate',
          {
            initialDate: input.filters!.initialDate,
          },
        );
      }
      if (shouldFilterByDate) {
        innerQueryBuilder.andWhere(
          'categoryDebit.createdAt BETWEEN :initialDate AND :finalDate',
          {
            initialDate: input.filters!.initialDate,
            finalDate: input.filters!.finalDate,
          },
        );
      }
      if (input.filters?.other) {
        innerQueryBuilder.andWhere(
          '(categoryDebit.title ILIKE :other OR categoryDebit.description ILIKE :other)',
          { other: `%${input.filters!.other}%` },
        );
      }
      return innerQueryBuilder;
    }, 'categoryDebit');
    const pagination = await paginateRaw(queryBuilder, input.paginate);
    // @ts-ignore
    pagination.items = pagination.items.map((item) => ({
      id: item.categoryDebit_id,
      title: item.categoryDebit_title,
      description: item.categoryDebit_description,
      createdAt: item.categoryDebit_createdAt,
      updatedAt: item.categoryDebit_updatedAt
    }));
    return pagination;
  }
}
