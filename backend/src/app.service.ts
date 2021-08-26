import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '새로운 ci/cd 환경입니다.';
  }
}
