import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from '@nestjs/schedule'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PriceModule } from './price/price.module'
import { CountModule } from './count/count.module'
import { configService } from './config/config.service'
import { ItemModule } from './item/item.module'

@Module({
    imports: [
        // ServeStaticModule.forRoot({
        //     rootPath: join(__dirname, '..', '..', 'static'),
        // }),
        ScheduleModule.forRoot(),
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        PriceModule,
        CountModule,
        ItemModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
