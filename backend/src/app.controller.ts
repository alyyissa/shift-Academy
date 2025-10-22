import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/name')
  getName(): string{
    return this.appService.getName();
  }

  @Post('/newName')
  postName(@Body('name') name: string){
    return this.appService.sayName(name);
    }
}
