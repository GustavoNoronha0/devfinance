import { Injectable } from '@nestjs/common';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';

@Injectable()
export class DeleteCategoryDebitService {
  constructor(private categoryDebitRepository: CategoryDebitRepository) { }
  async delete(id: string): Promise<true> {
    const categoryDebit = await this.categoryDebitRepository.findOneOrFail(id);
    await this.categoryDebitRepository.remove(categoryDebit);
    return true;
  }
}
