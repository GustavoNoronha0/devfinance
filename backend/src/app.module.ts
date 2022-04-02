
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import AuthModule from './modules/auth.module';
import graphqlConfig from './configs/graphql.config';
import { ReceivementModule } from './modules/receivement.module';
import { DebitModule } from './modules/debit.module';
import { CategoryDebitModule } from './modules/category-debit.module';
import { CategoryReceivementModule } from './modules/category-receivement.module';
import { AccountModule } from './modules/account.module';
import { GraphModule } from './modules/graph.module';
import { ReportsModule } from './modules/reports.module';

@Module({
  imports: [
    AuthModule,
    CategoryDebitModule,
    CategoryReceivementModule,
    DebitModule,
    ReceivementModule,
    AccountModule,
    GraphModule,
    ReportsModule,
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}