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
        .select([
          'receivement.id', 
          'receivement.title', 
          'receivement.description',
          'receivement.value',
          'receivement.date',
          'receivement.createdAt',
          'receivement.updatedAt'
        ])
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
          'categoryReceivement.title = :category',
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
      id: item.receivement_id,
      title: item.receivement_title,
      categoryReceivement: { title: item.categoryReceivement_title },
      description: item.receivement_description,
      value: item.receivement_value,
      date: item.receivement_date,
      createdAt: item.receivement_createdAt,
      updatedAt: item.receivement_updatedAt
    }));
    return pagination;
  }
}
