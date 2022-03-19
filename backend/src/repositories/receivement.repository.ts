import { EntityRepository, Repository } from 'typeorm';
import { Receivement } from '@/database/entities/receivement.entity';

@EntityRepository(Receivement)
export class ReceivementRepository extends Repository<Receivement> { }
