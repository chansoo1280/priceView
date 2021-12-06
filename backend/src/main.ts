import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.enableCors({
        origin: '*',
    })
    app.setGlobalPrefix('api')
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // validation을 위한 decorator가 붙어있지 않은 속성들은 제거
            forbidNonWhitelisted: true, // whitelist 설정을 켜서 걸러질 속성이 있다면 아예 요청 자체를 막도록 (400 에러)
            transform: true, // 요청에서 넘어온 자료들의 형변환
        }),
    )

    await app.listen(
        // eslint-disable-next-line no-nested-ternary
        (process.env.NODE_ENV === 'test'
            ? process.env.PORT_TEST
            : process.env.NODE_ENV === 'development'
            ? process.env.PORT_DEV
            : process.env.PORT) || 10001,
    )
}
bootstrap()
