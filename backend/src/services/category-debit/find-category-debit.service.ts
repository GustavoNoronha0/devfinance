import { Injectable } from '@nestjs/common';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';

@Injectable()
export class FindCategoryDebitService {
  constructor(private categoryDebitRepository: CategoryDebitRepository) { }
  async findById(id: string): Promise<CategoryDebit | undefined> {
    return this.categoryDebitRepository.findOne(id);
  }
}
