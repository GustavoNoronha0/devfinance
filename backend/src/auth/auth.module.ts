import { Account } from '@/database/entities/account.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthResolver from './auth.resolver';
import AuthService from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: 3600 },
      }),
    }),
    TypeOrmModule.forFeature([Account]),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy
  ],
})
export default class AuthModule {}
