import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hello1 -', process.env.PORT)
    return 'Hello World!';
  }
} 
