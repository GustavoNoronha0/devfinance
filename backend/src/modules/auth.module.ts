import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthResolver from '../auth/auth.resolver';
import AuthService from '../auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: 3600 },
      }),
    }),
    TypeOrmModule.forFeature([Account, AccountRepository]),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy
  ],
})
export default class AuthModule {}
