import { Injectable } from '@nestjs/common';
import { ReceivementRepository } from '@/repositories/receivement.repository';

@Injectable()
export class DeleteReceivementService {
  constructor(private receivementRepository: ReceivementRepository) { }
  async delete(id: string): Promise<true> {
    const receivement = await this.receivementRepository.findOneOrFail(id);
    await this.receivementRepository.remove(receivement);
    return true;
  }
}
