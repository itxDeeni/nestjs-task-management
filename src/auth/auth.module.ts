import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entitiy';
import { UserRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
