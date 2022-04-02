import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { FindAccountGraphResolver } from '@/resolvers/graph/find-account-graph.resolver';
import { FindAccountGraphService } from '@/services/graph/find-account-graph.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DebitRepository, ReceivementRepository])],
  providers: [
    FindAccountGraphResolver,
    FindAccountGraphService
  ],
})
export class GraphModule {}