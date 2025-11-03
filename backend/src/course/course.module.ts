import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  exports: [UserService]
})

export class CourseModule {}
