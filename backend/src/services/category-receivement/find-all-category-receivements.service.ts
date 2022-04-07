import { Injectable } from '@nestjs/common';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';
import { paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import { Connection } from 'typeorm';
import FindAllCategoryReceivementsInput from './filters/find-all-category-receivements.input';

@Injectable()
export class FindAllCategoryReceivementsService {
  constructor(private connection: Connection) { }
  async find(input: FindAllCategoryReceivementsInput): Promise<Pagination<CategoryReceivement>> {
    const queryBuilder = this.connection.createQueryBuilder();
    queryBuilder.from((innerQueryBuilder) => {
      innerQueryBuilder
        .select([
          'categoryReceivement.id', 
          'categoryReceivement.title', 
          'categoryReceivement.description',
          'categoryReceivement.createdAt',
          'categoryReceivement.updatedAt'
        ])
        .from(CategoryReceivement, 'categoryReceivement')
        .leftJoinAndSelect('categoryReceivement.account', 'account')
        .where('account.id = :accountId', { accountId: input.filters.account });
      const shouldFilterByDate =
        input.filters?.initialDate && input.filters?.finalDate;
      const hasOnlyCreatedAtGte =
        input.filters?.initialDate && !input.filters?.finalDate;
      if (hasOnlyCreatedAtGte) {
        innerQueryBuilder.andWhere(
          'categoryReceivement.createdAt >= :initialDate',
          {
            initialDate: input.filters!.initialDate,
          },
        );
      }
      if (shouldFilterByDate) {
        innerQueryBuilder.andWhere(
          'categoryReceivement.createdAt BETWEEN :initialDate AND :finalDate',
          {
            initialDate: input.filters!.initialDate,
            finalDate: input.filters!.finalDate,
          },
        );
      }
      if (input.filters?.other) {
        innerQueryBuilder.andWhere(
          '(categoryReceivement.title ILIKE :other OR categoryReceivement.description ILIKE :other)',
          { other: `%${input.filters!.other}%` },
        );
      }
      return innerQueryBuilder;
    }, 'categoryReceivement');
    const pagination = await paginateRaw(queryBuilder, input.paginate);
    // @ts-ignore
    pagination.items = pagination.items.map((item) => ({
      id: item.categoryReceivement_id,
      title: item.categoryReceivement_title,
      description: item.categoryReceivement_description,
      createdAt: item.categoryReceivement_createdAt,
      updatedAt: item.categoryReceivement_updatedAt
    }));
    return pagination;
  }
}
