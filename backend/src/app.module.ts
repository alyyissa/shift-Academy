import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { ChapterModule } from './chapter/chapter.module';
import { QuestionModule } from './question/question.module';
import { VideoModule } from './video/video.module';
import { SummaryModule } from './summary/summary.module';
import { AnswerModule } from './answer/answer.module';
import { PaymentModule } from './payment/payment.module';
import { MessageModule } from './message/message.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USERNAME,
      password: process.env.PASSWORD, 
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UniversityModule,
    CourseModule,
    ChapterModule,
    QuestionModule,
    VideoModule,
    SummaryModule,
    AnswerModule,
    PaymentModule,
    MessageModule,
    RateModule 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
