import { EntityRepository, Repository } from 'typeorm';
import { CategoryDebit } from '@/database/entities/category-debit.entity';

@EntityRepository(CategoryDebit)
export class CategoryDebitRepository extends Repository<CategoryDebit> { }
