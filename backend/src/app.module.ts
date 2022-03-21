import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  TerminusModule,
  TerminusModuleOptions,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { useAdapter } from '@type-cacheable/redis-adapter';
import * as redis from 'redis';
import graphqlConfig from '@/configs/graphql.config';
import redisConfig from '@/configs/redis.config';
import typeormConfig from '@/configs/typeorm.config';
import { isTesting } from '@/consts/envs';
import { AccountRepository } from '@/repositories/account.repository';
import { CreateAccountResolver } from '@/resolvers/account/create-account.resolver';
import { DeleteAccountResolver } from '@/resolvers/account/delete-account.resolver';
import { FindAllAccountsResolver } from '@/resolvers/account/find-all-account.resolver';
import { FindAccountResolver } from '@/resolvers/account/find-account.resolver';
import { UpdateAccountResolver } from '@/resolvers/account/update-account.resolver';
import { CreateAccountService } from '@/services/account/create-account.service';
import { DeleteAccountService } from '@/services/account/delete-account.service';
import { FindAllAccountsService } from '@/services/account/find-all-account.service';
import { FindAccountService } from '@/services/account/find-account.service';
import { UpdateAccountService } from '@/services/account/update-account.service';
import { CategoryDebitRepository } from './repositories/category-debit.repository';
import { CreateCategoryDebitService } from './services/category-debit/create-category-debit.service';
import { CreateCategoryDebitResolver } from './resolvers/category-debit/create-category-debit.resolver';
import { DeleteCategoryDebitService } from './services/category-debit/delete-category-debit.service';
import { DeleteCategoryDebitResolver } from './resolvers/category-debit/delete-category-debit.resolver';
import { FindCategoryDebitService } from './services/category-debit/find-category-debit.service';
import { FindCategoryDebitResolver } from './resolvers/category-debit/find-category-debit.resolver';
import { FindAllCategoryDebitsService } from './services/category-debit/find-all-category-debits.service';
import { FindAllCategoryDebitsResolver } from './resolvers/category-debit/find-all-category-debits.resolver';
import { UpdateCategoryDebitService } from './services/category-debit/update-category-debit.service';
import { UpdateCategoryDebitResolver } from './resolvers/category-debit/update-category-debit.resolver';
import { CreateCategoryReceivementResolver } from './resolvers/category-receivement/create-category-receivement.resolver';
import { DeleteCategoryReceivementResolver } from './resolvers/category-receivement/delete-category-receivement.resolver';
import { FindAllCategoryReceivementsResolver } from './resolvers/category-receivement/find-all-category-receivements.resolver';
import { FindCategoryReceivementResolver } from './resolvers/category-receivement/find-category-receivement.resolver';
import { UpdateCategoryReceivementResolver } from './resolvers/category-receivement/update-category-receivement.resolver';
import { CreateDebitResolver } from './resolvers/debit/create-debit.resolver';
import { DeleteDebitResolver } from './resolvers/debit/delete-debit.resolver';
import { FindAllDebitsResolver } from './resolvers/debit/find-all-debits.resolver';
import { FindDebitResolver } from './resolvers/debit/find-debit.resolver';
import { UpdateDebitResolver } from './resolvers/debit/update-debit.resolver';
import { CreateReceivementResolver } from './resolvers/receivement/create-receivement.resolver';
import { DeleteReceivementResolver } from './resolvers/receivement/delete-receivement.resolver';
import { FindAllReceivementsResolver } from './resolvers/receivement/find-all-receivements.resolver';
import { FindReceivementResolver } from './resolvers/receivement/find-receivement.resolver';
import { UpdateReceivementResolver } from './resolvers/receivement/update-receivement.resolver';
import { CreateCategoryReceivementService } from './services/category-receivement/create-category-receivement.service';
import { DeleteCategoryReceivementService } from './services/category-receivement/delete-category-receivement.service';
import { FindAllCategoryReceivementsService } from './services/category-receivement/find-all-category-receivements.service';
import { FindCategoryReceivementService } from './services/category-receivement/find-category-receivement.service';
import { UpdateCategoryReceivementService } from './services/category-receivement/update-category-receivement.service';
import { CreateDebitService } from './services/debit/create-debit.service';
import { DeleteDebitService } from './services/debit/delete-debit.service';
import { FindAllDebitsService } from './services/debit/find-all-debits.service';
import { FindDebitService } from './services/debit/find-debit.service';
import { UpdateDebitService } from './services/debit/update-debit.service';
import { CreateReceivementService } from './services/receivement/create-receivement.service';
import { DeleteReceivementService } from './services/receivement/delete-receivement.service';
import { FindAllReceivementsService } from './services/receivement/find-all-receivements.service';
import { FindReceivementService } from './services/receivement/find-receivement.service';
import { UpdateReceivementService } from './services/receivement/update-receivement.service';
import { FindAccountReportsService } from './services/reports/find-account-reports.service';
import { FindAccountReportsResolver } from './resolvers/reports/find-account-reports.resolver';
import { CategoryReceivementRepository } from './repositories/category-receivement.repository';
import { DebitRepository } from './repositories/debit.repository';
import { ReceivementRepository } from './repositories/receivement.repository';
import { FindAccountGraphService } from './services/graph/find-account-graph.service';
import { FindAccountGraphResolver } from './resolvers/graph/find-account-graph.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot(graphqlConfig),
    TerminusModule.forRootAsync({
      inject: [TypeOrmHealthIndicator],
      useFactory: (
        typeOrmHealthIndicator: TypeOrmHealthIndicator,
      ): TerminusModuleOptions => ({
        endpoints: [
          {
            healthIndicators: [
              async () => await typeOrmHealthIndicator.pingCheck('database'),
            ],
            url: 'health',
          },
        ],
      }),
    }),
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([
      AccountRepository,
      CategoryDebitRepository,
      CategoryReceivementRepository,
      DebitRepository,
      ReceivementRepository
    ]),
  ],
  providers: [
    CreateAccountService,
    CreateAccountResolver,
    DeleteAccountService,
    DeleteAccountResolver,
    FindAccountService,
    FindAccountResolver,
    FindAllAccountsService,
    FindAllAccountsResolver,
    UpdateAccountService,
    UpdateAccountResolver,
    CreateCategoryDebitService,
    CreateCategoryDebitResolver,
    DeleteCategoryDebitService,
    DeleteCategoryDebitResolver,
    FindCategoryDebitService,
    FindCategoryDebitResolver,
    FindAllCategoryDebitsService,
    FindAllCategoryDebitsResolver,
    UpdateCategoryDebitService,
    UpdateCategoryDebitResolver,
    CreateCategoryReceivementService,
    CreateCategoryReceivementResolver,
    DeleteCategoryReceivementService,
    DeleteCategoryReceivementResolver,
    FindCategoryReceivementService,
    FindCategoryReceivementResolver,
    FindAllCategoryReceivementsService,
    FindAllCategoryReceivementsResolver,
    UpdateCategoryReceivementService,
    UpdateCategoryReceivementResolver,
    CreateDebitService,
    CreateDebitResolver,
    DeleteDebitService,
    DeleteDebitResolver,
    FindDebitService,
    FindDebitResolver,
    FindAllDebitsService,
    FindAllDebitsResolver,
    UpdateDebitService,
    UpdateDebitResolver,
    CreateReceivementService,
    CreateReceivementResolver,
    DeleteReceivementService,
    DeleteReceivementResolver,
    FindReceivementService,
    FindReceivementResolver,
    FindAllReceivementsService,
    FindAllReceivementsResolver,
    UpdateReceivementService,
    UpdateReceivementResolver,
    FindAccountReportsService,
    FindAccountReportsResolver,
    FindAccountGraphService,
    FindAccountGraphResolver,
  ],
})
export class AppModule {
  onModuleInit() {
    // Do not register adapter on testing environment. Avoid caching purposes.
    if (isTesting) {
      return;
    }
    useAdapter(redis.createClient(redisConfig));
  }
}
