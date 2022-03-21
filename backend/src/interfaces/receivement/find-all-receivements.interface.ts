import FindAllReceivementsInput from '@/services/receivement/filters/find-all-receivements.input';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Receivement } from './receivement.interface';

export interface FindAllReceivementsService {
  find(input: FindAllReceivementsInput): Promise<Pagination<Receivement>>;
}
