import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! railway 2.0';
  }

  async test(): Promise<string> {
    return 'a';
  }
}
