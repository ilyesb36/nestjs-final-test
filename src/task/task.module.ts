import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { UserService } from '../user/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [TaskController],
    providers: [TaskService, UserService],
})
export class TaskModule {}