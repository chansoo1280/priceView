import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    getHello(): string {
        console.log(this)
        return '새로운 ci/cd 환경입니다.\n  환영합니다!ver-0.0.2'
    }
}
