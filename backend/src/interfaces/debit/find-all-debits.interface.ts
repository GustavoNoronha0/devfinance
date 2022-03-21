import FindAllDebitsInput from '@/services/debit/filters/find-all-debits.input';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Debit } from './debit.interface';

export interface FindAllDebitsService {
  find(input: FindAllDebitsInput): Promise<Pagination<Debit>>;
}
