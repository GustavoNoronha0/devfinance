import { AccountRepository } from '@/repositories/account.repository';
import { CategoryDebitRepository } from '@/repositories/category-debit.repository';
import { CreateCategoryDebitResolver } from '@/resolvers/category-debit/create-category-debit.resolver';
import { DeleteCategoryDebitResolver } from '@/resolvers/category-debit/delete-category-debit.resolver';
import { FindAllCategoryDebitsResolver } from '@/resolvers/category-debit/find-all-category-debits.resolver';
import { FindCategoryDebitResolver } from '@/resolvers/category-debit/find-category-debit.resolver';
import { UpdateCategoryDebitResolver } from '@/resolvers/category-debit/update-category-debit.resolver';
import { CreateCategoryDebitService } from '@/services/category-debit/create-category-debit.service';
import { DeleteCategoryDebitService } from '@/services/category-debit/delete-category-debit.service';
import { FindAllCategoryDebitsService } from '@/services/category-debit/find-all-category-debits.service';
import { FindCategoryDebitService } from '@/services/category-debit/find-category-debit.service';
import { UpdateCategoryDebitService } from '@/services/category-debit/update-category-debit.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDebitRepository, AccountRepository])],
  providers: [
    CreateCategoryDebitService,
    CreateCategoryDebitResolver,
    FindAllCategoryDebitsService,
    FindAllCategoryDebitsResolver,
    FindCategoryDebitService,
    FindCategoryDebitResolver,
    DeleteCategoryDebitService,
    DeleteCategoryDebitResolver,
    UpdateCategoryDebitService,
    UpdateCategoryDebitResolver
  ],
})
export class CategoryDebitModule {}