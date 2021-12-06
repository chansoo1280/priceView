import { INestApplication, ValidationPipe } from '@nestjs/common'
import { ResCode } from 'src/common/handleResult'
import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from 'src/app.module'

export const getApp = async (): Promise<INestApplication> => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
    }).compile()
    const app = moduleFixture.createNestApplication()

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
            forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
            transform: true, // 요청에서 넘어온 자료들의 형변환
        }),
    )
    return app
}
