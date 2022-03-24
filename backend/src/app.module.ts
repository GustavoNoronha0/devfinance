
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import AuthModule from './auth/auth.module';
import graphqlConfig from './configs/graphql.config';
import { ReceivementModule } from './modules/receivement.module';

@Module({
  imports: [
    AuthModule,
    ReceivementModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot(graphqlConfig),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}