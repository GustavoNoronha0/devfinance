
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import AuthModule from './auth/auth.module';
import graphqlConfig from './configs/graphql.config';
import { ReceivementModule } from './modules/receivement.module';
import { DebitModule } from './modules/debit.module';
import { CategoryDebitModule } from './modules/category-debit.module';
import { CategoryReceivementModule } from './modules/category-receivement.module';

@Module({
  imports: [
    AuthModule,
    CategoryDebitModule,
    CategoryReceivementModule,
    DebitModule,
    ReceivementModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}