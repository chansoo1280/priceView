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
    const date = new Date();
    const curDate_1 = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      2, // 날짜가 1일로 정확히 안찍힘 -> date 지역설정 필요
    );
    const curDate_2 = new Date(date.getFullYear(), date.getMonth(), 2);
    const YEAR = String(curDate_1.getFullYear());
    const MONTH = String(curDate_1.getMonth() + 1);
    const P_YEAR_MONTH =
      YEAR + '-' + (MONTH.length === 1 ? '0' + MONTH : MONTH);
    const YEAR2 = String(curDate_2.getFullYear());
    const MONTH2 = String(curDate_2.getMonth() + 1);
    const P_YEAR_MONTH2 =
      YEAR2 + '-' + (MONTH2.length === 1 ? '0' + MONTH2 : MONTH2);
    const config = {
      headers: {
        SECRET: 'asdY235h^&@!%Y&~!~',
      },
    };
    await this.httpService
      .get(`http://13.125.195.7/api/price?P_YEAR_MONTH=${P_YEAR_MONTH}`, config)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
    await this.httpService
      .get(
        `http://13.125.195.7/api/price?P_YEAR_MONTH=${P_YEAR_MONTH2}`,
        config,
      )
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();

    const merge_lsit = [
      ['동태', 13, '동태', 288],
      ['고등어', 304, '고등어', 13],
      ['닭고기', 320, '달걀(왕란)', 134],
      ['', 18, '닭고기', 18],
      ['돼지고기', 18, '돼지고기', 285],
      ['돼지고기', 171, '돼지고기', 285],
      ['', 171, '달걀(10개)', 171],
      ['조기', 253, '오징어', 253],
      ['', 278, '쇠고기', 278],
      ['', 285, '돼지고기', 285],
      ['쇠고기', 285, '쇠고기', 278],
      ['달걀(30개)', 288, '동태', 288],
      ['달걀(10개)', 303, '조기', 303],
      ['사과(부사),중급(대)', 237, '사과(부사),중급(대)', 244],
      ['달걀(왕란)', 134, '달걀(왕란)', 181],
      ['달걀', 17, '달걀(10개)', 171],
      ['배추(중간)', 175, '배추(중간)', 271],
      ['무(세척무)', 282, '무(세척무)', 133],
    ];
    for (let i = 0; i < merge_lsit.length; i++) {
      const info = merge_lsit[i];
      await this.priceRepository
        .createQueryBuilder()
        .update(Price)
        .set({
          A_SEQ: info[3],
          A_NAME: info[2],
        })
        .where('price.A_SEQ = :A_SEQ', { A_SEQ: info[1] })
        .andWhere('price.A_NAME = :A_NAME', { A_NAME: info[0] })
        .execute();
    }

    await this.httpService
      .get(`http://13.125.195.7/api/count?P_YEAR_MONTH=${P_YEAR_MONTH}`, config)
      .pipe(map((response: { data: any }) => response.data))
      .toPromise();
    await this.httpService
      .get(
        `http://13.125.195.7/api/count?P_YEAR_MONTH=${P_YEAR_MONTH2}`,
        config,
      )
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
