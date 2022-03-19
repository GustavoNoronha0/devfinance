import { EntityRepository, Repository } from 'typeorm';
import { CategoryReceivement } from '@/database/entities/category-receivement.entity';

@EntityRepository(CategoryReceivement)
export class CategoryReceivementRepository extends Repository<CategoryReceivement> { }
