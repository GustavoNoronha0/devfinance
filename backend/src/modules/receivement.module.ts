import { AccountRepository } from '@/repositories/account.repository';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { CreateReceivementResolver } from '@/resolvers/receivement/create-receivement.resolver';
import { DeleteReceivementResolver } from '@/resolvers/receivement/delete-receivement.resolver';
import { FindAllReceivementsResolver } from '@/resolvers/receivement/find-all-receivements.resolver';
import { FindReceivementResolver } from '@/resolvers/receivement/find-receivement.resolver';
import { UpdateReceivementResolver } from '@/resolvers/receivement/update-receivement.resolver';
import { CreateReceivementService } from '@/services/receivement/create-receivement.service';
import { DeleteReceivementService } from '@/services/receivement/delete-receivement.service';
import { FindAllReceivementsService } from '@/services/receivement/find-all-receivements.service';
import { FindReceivementService } from '@/services/receivement/find-receivement.service';
import { UpdateReceivementService } from '@/services/receivement/update-receivement.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ReceivementRepository, CategoryReceivementRepository, AccountRepository])],
  providers: [
    CreateReceivementService,
    CreateReceivementResolver,
    FindAllReceivementsService,
    FindAllReceivementsResolver,
    FindReceivementService,
    FindReceivementResolver,
    DeleteReceivementService,
    DeleteReceivementResolver,
    UpdateReceivementService,
    UpdateReceivementResolver
  ],
})
export class ReceivementModule {}