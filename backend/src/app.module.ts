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
    TypeOrmModule.forFeature([AccountRepository, CategoryDebitRepository]),
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
