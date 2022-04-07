import { AccountRepository } from '@/repositories/account.repository';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { DebitRepository } from '@/repositories/debit.repository';
import { CreateDebitResolver } from '@/resolvers/debit/create-debit.resolver';
import { DeleteDebitResolver } from '@/resolvers/debit/delete-debit.resolver';
import { FindAllDebitsResolver } from '@/resolvers/debit/find-all-debits.resolver';
import { FindDebitResolver } from '@/resolvers/debit/find-debit.resolver';
import { UpdateDebitResolver } from '@/resolvers/debit/update-debit.resolver';
import { CreateDebitService } from '@/services/debit/create-debit.service';
import { DeleteDebitService } from '@/services/debit/delete-debit.service';
import { FindAllDebitsService } from '@/services/debit/find-all-debits.service';
import { FindDebitService } from '@/services/debit/find-debit.service';
import { UpdateDebitService } from '@/services/debit/update-debit.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DebitRepository, CategoryDebitRepository, AccountRepository])],
  providers: [
    CreateDebitService,
    CreateDebitResolver,
    FindAllDebitsService,
    FindAllDebitsResolver,
    FindDebitService,
    FindDebitResolver,
    DeleteDebitService,
    DeleteDebitResolver,
    UpdateDebitService,
    UpdateDebitResolver
  ],
})
export class DebitModule {}