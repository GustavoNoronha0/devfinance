import { EntityRepository, Repository } from 'typeorm';
import { Debit } from '@/database/entities/debit.entity';

@EntityRepository(Debit)
export class DebitRepository extends Repository<Debit> { }
