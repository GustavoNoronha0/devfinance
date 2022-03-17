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
    TypeOrmModule.forFeature([AccountRepository]),
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
