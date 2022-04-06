import { Injectable } from '@nestjs/common';
import { Receivement } from '@/database/entities/receivement.entity';
import { paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import { Connection } from 'typeorm';
import FindAllReceivementsInput from './filters/find-all-receivements.input';

@Injectable()
export class FindAllReceivementsService {
  constructor(private connection: Connection) { }
  async find(input: FindAllReceivementsInput): Promise<Pagination<Receivement>> {
    const queryBuilder = this.connection.createQueryBuilder();
    queryBuilder.from((innerQueryBuilder) => {
      innerQueryBuilder
        .select('*')
        .from(Receivement, 'receivement')
        .leftJoinAndSelect('receivement.account', 'account')
        .leftJoinAndSelect('receivement.categoryReceivement', 'categoryReceivement')
        .where('account.id = :accountId', { accountId: input.filters.account });
      const shouldFilterByDate =
        input.filters?.initialDate && input.filters?.finalDate;
      const hasOnlyCreatedAtGte =
        input.filters?.initialDate && !input.filters?.finalDate;
      if (hasOnlyCreatedAtGte) {
        innerQueryBuilder.andWhere(
          'receivement.createdAt >= :initialDate',
          {
            initialDate: input.filters!.initialDate,
          },
        );
      }
      if (shouldFilterByDate) {
        innerQueryBuilder.andWhere(
          'receivement.createdAt BETWEEN :initialDate AND :finalDate',
          {
            initialDate: input.filters!.initialDate,
            finalDate: input.filters!.finalDate,
          },
        );
      }
      if (input.filters?.category) {
        innerQueryBuilder.andWhere(
          'categoryReceivement.id = :category',
          { category: input.filters!.category },
        );
      }
      if (input.filters?.other) {
        innerQueryBuilder.andWhere(
          '(receivement.title ILIKE :other OR receivement.description ILIKE :other)',
          { other: `%${input.filters!.other}%` },
        );
      }
      return innerQueryBuilder;
    }, 'receivement');
    const pagination = await paginateRaw(queryBuilder, input.paginate);
    // @ts-ignore
    pagination.items = pagination.items.map((item) => ({
      id: item.id,
      title: item.title,
      categoryReceivement: { title: item.categoryReceivement_title },
      value: item.value,
      date: item.date,
      description: item.description,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));
    return pagination;
  }
}
