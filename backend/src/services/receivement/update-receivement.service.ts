import { Injectable } from '@nestjs/common';
import { Receivement } from '@/database/entities/receivement.entity';
import { UpdateReceivementInput } from '@/inputs/receivement/update-receivement.input';
import { ReceivementRepository } from '@/repositories/receivement.repository';

@Injectable()
export class UpdateReceivementService {
  constructor(private receivementRepository: ReceivementRepository) { }
  async update(id: string, input: UpdateReceivementInput): Promise<Receivement> {
    const receivement = await this.receivementRepository.findOneOrFail(id);
    const receivementUpdated = Object.assign(receivement, input);
    return this.receivementRepository.save(receivementUpdated);
  }
}
