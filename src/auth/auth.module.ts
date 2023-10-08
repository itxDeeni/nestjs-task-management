import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
<<<<<<< HEAD
import { UsersRepository } from './users-repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService],
  controllers: [AuthController]
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entitiy';
import { UserRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'topSecret51' }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [AuthService, UserRepository, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
>>>>>>> dd2caaf868ea81359df175cf0764ae7798806dca
})
export class AuthModule {}
