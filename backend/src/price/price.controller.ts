import { Controller, Get, Param, Query, Req, Res } from "@nestjs/common"
import handleResult, { ResCode } from "src/common/handleResult"
import { Response, Request } from "express"
import { SECRET } from "src/common/constants"
import { ITEM_OBJ } from "@Definitions"
import { PriceService } from "./price.service"
import { SelectCntPriceDto } from "./dto/select_cnt-price.dto"
import { InitPriceDto } from "./dto/init-count.dto"

@Controller("price")
export class PriceController {
    constructor(private priceService: PriceService) {}

    @Get()
    async initDB(
        @Query() { P_YEAR_MONTH }: InitPriceDto,
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        // console.log(req.headers)
        if (req.headers.secret !== SECRET) return handleResult(ResCode.Unauthorized, res)
        const insertData = async (page: number) => {
            const result = await this.priceService.findAll(P_YEAR_MONTH, page)
            const resCode = result.ListNecessariesPricesService?.RESULT?.CODE
            if (resCode !== "INFO-000") return

            const totalList = result.ListNecessariesPricesService.row
            const step = 100
            const batchLen = Math.ceil(totalList.length / step)
            for (let i = 0; i < batchLen; i += 1) {
                // console.log(i * step, (i + 1) * step - 1)
                // eslint-disable-next-line no-await-in-loop
                await this.priceService.createPrice(totalList.slice(i * step, (i + 1) * step - 1))
            }
        }
        const result = await this.priceService.getLen(P_YEAR_MONTH)
        const resCode = result.ListNecessariesPricesService?.RESULT?.CODE
        if (resCode !== "INFO-000") return handleResult(ResCode.NoContent, res) // 내용이 없음

        const listTotalCnt = result.ListNecessariesPricesService?.list_total_count
        const totalLen = Math.ceil(listTotalCnt / 1000) // 1000개씩 돌리기
        const works = []
        for (let i = 0; i < totalLen; i += 1) {
            console.log(`${listTotalCnt}-${i + 1}`)
            works.push(insertData(i))
        }
        await Promise.all(works)
        return handleResult(ResCode.OK, res)
    }

    @Get("/:M_SEQ")
    async getCnt(
        @Param() { M_SEQ }: { M_SEQ: string },
        @Query() { P_YEAR_MONTH }: SelectCntPriceDto,
        @Res() res: Response,
    ): Promise<Response> {
        const { A_NAME_DATA, A_UNIT } = ITEM_OBJ[Number(M_SEQ) as keyof typeof ITEM_OBJ]
        const result = await this.priceService.getCnt({
            name: A_NAME_DATA,
            A_UNIT,
            P_YEAR_MONTH,
        })
        return handleResult(result, res)
    }
}
