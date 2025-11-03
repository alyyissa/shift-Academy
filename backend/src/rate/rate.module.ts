import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [RateController],
  providers: [RateService],
  imports: [UserService]
})
export class RateModule {}
