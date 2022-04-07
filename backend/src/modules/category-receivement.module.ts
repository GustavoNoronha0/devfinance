import { AccountRepository } from '@/repositories/account.repository';
import { CategoryReceivementRepository } from '@/repositories/category-receivement.repository';
import { CreateCategoryReceivementResolver } from '@/resolvers/category-receivement/create-category-receivement.resolver';
import { DeleteCategoryReceivementResolver } from '@/resolvers/category-receivement/delete-category-receivement.resolver';
import { FindAllCategoryReceivementsResolver } from '@/resolvers/category-receivement/find-all-category-receivements.resolver';
import { FindCategoryReceivementResolver } from '@/resolvers/category-receivement/find-category-receivement.resolver';
import { UpdateCategoryReceivementResolver } from '@/resolvers/category-receivement/update-category-receivement.resolver';
import { CreateCategoryReceivementService } from '@/services/category-receivement/create-category-receivement.service';
import { DeleteCategoryReceivementService } from '@/services/category-receivement/delete-category-receivement.service';
import { FindAllCategoryReceivementsService } from '@/services/category-receivement/find-all-category-receivements.service';
import { FindCategoryReceivementService } from '@/services/category-receivement/find-category-receivement.service';
import { UpdateCategoryReceivementService } from '@/services/category-receivement/update-category-receivement.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryReceivementRepository, AccountRepository])],
  providers: [
    CreateCategoryReceivementService,
    CreateCategoryReceivementResolver,
    FindAllCategoryReceivementsService,
    FindAllCategoryReceivementsResolver,
    FindCategoryReceivementService,
    FindCategoryReceivementResolver,
    DeleteCategoryReceivementService,
    DeleteCategoryReceivementResolver,
    UpdateCategoryReceivementService,
    UpdateCategoryReceivementResolver
  ],
})
export class CategoryReceivementModule {}