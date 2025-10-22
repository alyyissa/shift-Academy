import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getName():string{
    return 'Ali is learning';
  }
  sayName(name: string){
    return 'Welcome to ' + name;
  }
}


