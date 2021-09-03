import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import {
  GU_NAME_OBJ,
  M_GU_CODE_LIST,
  M_TYPE_CODE_LIST,
  NAME_OBJ,
  TYPE_NAME_OBJ,
} from 'src/common/define';
import handleResult, { ResCode } from 'src/common/handleResult';
import { Price } from 'src/price/price.entity';
import { PriceService } from 'src/price/price.service';
import { CountService } from './count.service';
import { Response, Request } from 'express';
import { Count } from './count.entity';
import { SelectCountDto } from './dto/select-count.dto';
import { SECRET } from 'src/common/constants';

@Controller('count')
export class CountController {
  constructor(
    private countService: CountService,
    private priceService: PriceService,
  ) {}

  @Get('/info')
  async getStatistics(
    @Query() { A_SEQS, P_YEAR_MONTH, M_GU_CODE }: SelectCountDto,
    @Res() res: Response,
  ) {
    const P_YEAR_MONTH_LIST = (function () {
      const fillZero = (str: string) => {
        if (str.length === 1) return '0' + str;
        return str;
      };
      const list = [];
      let year = Number(P_YEAR_MONTH.split('-')[0]);
      let month = Number(P_YEAR_MONTH.split('-')[1]);
      for (let i = 0; i < 4; i++) {
        list.push(fillZero(String(year)) + '-' + fillZero(String(month)));
        if (month !== 1) {
          month--;
        } else {
          month = 12;
          year--;
        }
      }
      return list;
    })();
    const A_SEQ_LIST = A_SEQS.split(', ');
    const result = await this.countService.getStatistics({
      A_SEQ_LIST,
      P_YEAR_MONTH_LIST,
      M_GU_CODE,
    });
    return handleResult(result, res);
  }

  // @Get('/:A_SEQ')
  // async getStatistics(
  //   @Param() { A_SEQ }: { A_SEQ: Count['A_SEQ'] },
  //   @Query() { P_YEAR_MONTH, M_TYPE_CODE, M_GU_CODE }: SelectCountDto,
  //   @Res() res: Response,
  // ) {
  //   const P_YEAR_MONTH_LIST = (function () {
  //     const fillZero = (str: string) => {
  //       if (str.length === 1) return '0' + str;
  //       return str;
  //     };
  //     const list = [];
  //     let year = Number(P_YEAR_MONTH.split('-')[0]);
  //     let month = Number(P_YEAR_MONTH.split('-')[1]);
  //     for (let i = 0; i < 6; i++) {
  //       list.push(fillZero(String(year)) + '-' + fillZero(String(month)));
  //       if (month !== 1) {
  //         month--;
  //       } else {
  //         month = 12;
  //         year--;
  //       }
  //     }
  //     return list;
  //   })();
  //   // console.log(A_SEQ, P_YEAR_MONTH_LIST, M_TYPE_CODE, M_GU_CODE);
  //   const result = await this.countService.getStatistics({
  //     A_SEQ,
  //     P_YEAR_MONTH_LIST,
  //     M_TYPE_CODE,
  //     M_GU_CODE,
  //   });
  //   return handleResult(result, res);
  // }

  @Get()
  async initDB(
    @Query()
    { P_YEAR_MONTH }: { P_YEAR_MONTH: string },
    @Req() req: Request,
    @Res() res: Response,
  ) {
    if (req.headers.secret !== SECRET)
      return handleResult(ResCode.Unauthorized, res);
    const insertCount = async (
      P_YEAR_MONTH: Price['P_YEAR_MONTH'],
      A_SEQ: number,
      A_UNIT: string[],
    ) => {
      const result = await this.priceService.getCnt({
        name: NAME_OBJ[A_SEQ].A_NAME,
        A_UNIT,
        P_YEAR_MONTH,
      });
      // if (P_YEAR_MONTH === "2020-02" && A_SEQ === Number("312")) {
      //     console.log(result)
      // }
      for (let i = 0; i < M_TYPE_CODE_LIST.length; i++) {
        const type_list = result.filter((price_info: Price) => {
          if (M_TYPE_CODE_LIST[i] === '') return true;
          return price_info.M_TYPE_CODE === M_TYPE_CODE_LIST[i];
        });
        for (let j = 0; j < M_GU_CODE_LIST.length; j++) {
          const insert_list = type_list.filter((price_info: Price) => {
            if (M_GU_CODE_LIST[j] === '') return true;
            return price_info.M_GU_CODE === M_GU_CODE_LIST[j];
          });
          // console.log(M_TYPE_CODE_LIST[i], M_GU_CODE_LIST[j], insert_list.length)
          const A_TOTAL_PRICE = (function () {
            let price = 0;
            for (let k = 0; k < insert_list.length; k++) {
              price = price + Number(insert_list[k].A_PRICE);
            }
            return price;
          })();
          const C_CODE = [
            String(A_SEQ),
            P_YEAR_MONTH,
            M_TYPE_CODE_LIST[i],
            M_GU_CODE_LIST[j],
          ].join('_');
          const isExist = await this.countService.getCount(C_CODE);
          if (isExist !== ResCode.NoContent) {
            const count_seq = isExist.count_seq;
            this.countService.updateCount(count_seq, {
              A_UNIT: A_UNIT[0],
              length: insert_list.length,
              AVER_VAL: A_TOTAL_PRICE / insert_list.length || 0,
            });
            continue;
          }
          this.countService.createCount({
            C_CODE: C_CODE,
            A_SEQ: String(A_SEQ),
            A_NAME: NAME_OBJ[A_SEQ].A_NAME,
            A_UNIT: A_UNIT[0],
            P_YEAR: P_YEAR_MONTH.slice(0, 4),
            P_YEAR_MONTH: P_YEAR_MONTH,
            M_TYPE_CODE: M_TYPE_CODE_LIST[i],
            M_TYPE_NAME: TYPE_NAME_OBJ[M_TYPE_CODE_LIST[i]] || '',
            M_GU_CODE: M_GU_CODE_LIST[j],
            M_GU_NAME: GU_NAME_OBJ[M_GU_CODE_LIST[j]] || '',
            length: insert_list.length,
            AVER_VAL: A_TOTAL_PRICE / insert_list.length || 0,
          });
        }
      }
    };
    // for (let i = startMonth; i <= startMonth; i++) {
    // }
    // const P_YEAR_MONTH =
    //   String(P_YEAR) +
    //   '-' +
    //   (String(i).length === 1 ? 0 + String(i) : String(i));
    console.log(P_YEAR_MONTH);
    for (const A_SEQ in NAME_OBJ) {
      await insertCount(P_YEAR_MONTH, Number(A_SEQ), NAME_OBJ[A_SEQ].A_UNIT);
    }
    // await insertCount("2020-02", Number("312"), ["1개"])
    console.log('done');
    return handleResult(ResCode.OK, res);
  }
}
