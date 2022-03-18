import { Injectable } from '@nestjs/common';
import { CategoryDebit } from '@/database/entities/category-debit.entity';
import { UpdateCategoryDebitInput } from '@/inputs/category-debit/update-category-debit.input';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';

@Injectable()
export class UpdateCategoryDebitService {
  constructor(private categoryDebitRepository: CategoryDebitRepository) { }
  async update(id: string, input: UpdateCategoryDebitInput): Promise<CategoryDebit> {
    const categoryDebit = await this.categoryDebitRepository.findOneOrFail(id);
    const categoryDebitUpdated = Object.assign(categoryDebit, input);
    return this.categoryDebitRepository.save(categoryDebitUpdated);
  }
}
