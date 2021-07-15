import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Price } from './price.entity';
import { PriceRepository } from './price.repository';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, InsertResult } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class PriceService extends TypeOrmQueryService<Price> {
  constructor(
    @InjectRepository(Price)
    private readonly priceRepository: PriceRepository,
    private httpService: HttpService,
  ) {
    super(priceRepository, { useSoftDelete: true });
  }

  // @Cron('0 0 * * * *', {
  @Cron('0 0 0 0 * *', {
    name: 'notifications',
    timeZone: 'Asia/Seoul',
  })
  async handleCron() {
    // update query 실행해야함 - 개발 진행중
    const date = new Date();
    const curDate_1 = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      2, // 날짜가 1일로 정확히 안찍힘 -> date 지역설정 필요
    );
    const curDate_2 = new Date(date.getFullYear(), date.getMonth(), 2);
    const P_YEAR_MONTH =
      String(curDate_1.getFullYear()) +
      '-' +
      (String(curDate_1.getMonth() + 1).length === 1
        ? 0 + String(curDate_1.getMonth() + 1)
        : String(curDate_1.getMonth() + 1));
    const P_YEAR_MONTH2 =
      String(curDate_2.getFullYear()) +
      '-' +
      (String(curDate_2.getMonth() + 1).length === 1
        ? 0 + String(curDate_2.getMonth() + 1)
        : String(curDate_2.getMonth() + 1));
    await this.httpService
      .get(`http://localhost:5000/api/price?P_YEAR_MONTH=${P_YEAR_MONTH}`)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
    await this.httpService
      .get(`http://localhost:5000/api/price?P_YEAR_MONTH=${P_YEAR_MONTH2}`)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();

    await this.httpService
      .get(`http://localhost:5000/api/count?P_YEAR_MONTH=${P_YEAR_MONTH}`)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
    await this.httpService
      .get(`http://localhost:5000/api/count?P_YEAR_MONTH=${P_YEAR_MONTH2}`)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
  }

  async getCnt({ name, A_UNIT, P_YEAR_MONTH }: any) {
    const result = await this.priceRepository
      .createQueryBuilder('price')
      .select()
      .where('price.A_NAME = :name', { name })
      // .andWhere("price.A_UNIT IN (:units)", { units: A_UNIT })
      .andWhere(
        new Brackets((subQy) => {
          A_UNIT.map((unit: any, idx: number) => {
            return subQy.orWhere('price.A_UNIT LIKE :unit_' + idx, {
              ['unit_' + idx]: `%${unit}%`,
            });
          });
        }),
      )
      .andWhere('price.P_YEAR_MONTH = :P_YEAR_MONTH', { P_YEAR_MONTH })
      .getMany();
    return result;
  }

  async getLen(P_YEAR_MONTH: Price['P_YEAR_MONTH']): Promise<any> {
    return this.httpService
      .get(
        'http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/1/1/%20/%20/' +
          P_YEAR_MONTH,
      )
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
  }

  async findAll(
    P_YEAR_MONTH: Price['P_YEAR_MONTH'],
    page: number,
  ): Promise<any> {
    // console.log((page * 1000) + 1, ((page + 1) * 1000))
    return this.httpService
      .get(
        'http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/' +
          String(page * 1000 + 1) +
          '/' +
          String((page + 1) * 1000) +
          '/%20/%20/' +
          P_YEAR_MONTH,
      )
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
  }

  async createPrice(list: Price[]): Promise<InsertResult> {
    const result = await this.priceRepository
      .createQueryBuilder()
      .insert()
      .into(Price)
      .values(list)
      .orUpdate({ conflict_target: ['P_SEQ'], overwrite: [] })
      .execute()
      .catch((err) => {
        console.log(err);
        return err;
      });
    return result;
  }
}
