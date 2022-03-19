import { Injectable } from '@nestjs/common';
import { Receivement } from '@/database/entities/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { Account } from '@/database/entities/account.entity';

@Injectable()
export class FindAllReceivementsService {
  constructor(private receivementRepository: ReceivementRepository) { }
  async find(account: Account['id']): Promise<Receivement[]> {
    return this.receivementRepository.find({ where: { account } });
  }
}
