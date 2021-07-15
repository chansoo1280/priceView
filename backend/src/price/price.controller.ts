import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import handleResult, { ResCode } from 'src/common/handleResult';
import { PriceService } from './price.service';
import { Response, Request } from 'express';
import { SelectCntPriceDto } from './dto/select_cnt-price.dto';
import { InitPriceDto } from './dto/init-count.dto';
import { SECRET } from 'src/common/constants';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Get()
  async initDB(
    @Query() { P_YEAR_MONTH }: InitPriceDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    if (req.headers.secret !== SECRET)
      return handleResult(ResCode.Unauthorized, res);
    const insertData = async (P_YEAR_MONTH: string, page: number) => {
      const result = await this.priceService.findAll(P_YEAR_MONTH, page);
      // const list_total_count =
      //   result.ListNecessariesPricesService?.list_total_count;
      const res_CODE = result.ListNecessariesPricesService?.RESULT?.CODE;
      const total_list = result.ListNecessariesPricesService.row;
      if (res_CODE !== 'INFO-000') return;
      // console.log(list_total_count);
      const len = total_list.length;
      const step = 100;
      for (let j = 0; j < Math.ceil(len / step); j++) {
        await this.priceService.createPrice(
          total_list.slice(j * step, (j + 1) * step - 1),
        );
      }
    };
    let total_cnt = 0;
    // const P_YEAR_MONTH =
    //   String(year) +
    //   '-' +
    //   (String(i).length === 1 ? 0 + String(i) : String(i));
    const result = await this.priceService.getLen(P_YEAR_MONTH);
    const list_total_count =
      result.ListNecessariesPricesService?.list_total_count;
    const res_CODE = result.ListNecessariesPricesService?.RESULT?.CODE;
    if (res_CODE !== 'INFO-000') return handleResult(ResCode.NoContent, res); // 내용이 없음
    total_cnt = total_cnt + list_total_count;
    const total_len = Math.ceil(list_total_count / 1000); // 1000개씩 돌리기
    for (let j = 0; j < total_len; j++) {
      console.log(total_cnt + '-' + (j + 1));
      await insertData(P_YEAR_MONTH, j);
    }
    return handleResult(ResCode.OK, res);
  }

  @Get('/cnt')
  async getCnt(
    @Query() { A_NAME, A_UNIT, P_YEAR_MONTH }: SelectCntPriceDto,
    @Res() res: Response,
  ): Promise<any> {
    A_UNIT = JSON.parse(A_UNIT);
    const result = await this.priceService.getCnt({
      name: A_NAME,
      A_UNIT,
      P_YEAR_MONTH,
    });
    return handleResult(result, res);
  }
}
