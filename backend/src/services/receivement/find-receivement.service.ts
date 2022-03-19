import { Injectable } from '@nestjs/common';
import { Receivement } from '@/database/entities/receivement.entity';
import { ReceivementRepository } from '@/repositories/receivement.repository';

@Injectable()
export class FindReceivementService {
  constructor(private receivementRepository: ReceivementRepository) { }
  async findById(id: string): Promise<Receivement | undefined> {
    return this.receivementRepository.findOne(id);
  }
}
