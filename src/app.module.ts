import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/tasks.entity';
import { TasksRepository } from './tasks/tasks.repository';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
=======
import { User } from './auth/user.entitiy';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
>>>>>>> dd2caaf868ea81359df175cf0764ae7798806dca

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
<<<<<<< HEAD
=======
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          entities: [Task, User],
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('PORT'),
          username: configService.get('USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
    // TypeOrmModule.forRoot({
    //
    // }),
>>>>>>> dd2caaf868ea81359df175cf0764ae7798806dca
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class AppModule {}
