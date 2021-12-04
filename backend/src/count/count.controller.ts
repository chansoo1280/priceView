import { Controller, Get, Query, Req, Res } from "@nestjs/common"
import { M_GU, M_GU_CODE_LIST, M_TYPE_CODE_LIST, ITEM_OBJ, M_TYPE_DATA } from "@Definitions"
import handleResult, { ResCode } from "src/common/handleResult"
import { Price } from "src/price/price.entity"
import { PriceService } from "src/price/price.service"
import { Response, Request } from "express"
import { SECRET } from "src/common/constants"
import { CountService } from "./count.service"
import { SelectCountDto } from "./dto/select-count.dto"

@Controller("count")
export class CountController {
    constructor(private countService: CountService, private priceService: PriceService) {}

    @Get()
    async initDB(
        @Query()
        { P_YEAR_MONTH }: { P_YEAR_MONTH: string },
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        if (req.headers.secret !== SECRET) return handleResult(ResCode.Unauthorized, res)
        const insertCount = async (P_YEAR_MONTH: Price["P_YEAR_MONTH"], A_SEQ: number, A_UNIT: readonly string[]) => {
            console.log(A_SEQ)
            const result = await this.priceService.getCnt({
                name: ITEM_OBJ[A_SEQ as keyof typeof ITEM_OBJ].A_NAME_DATA,
                A_UNIT,
                P_YEAR_MONTH,
            })
            for (let i = 0; i < M_TYPE_CODE_LIST.length; i += 1) {
                const typeList = result.filter((priceInfo: Price) => {
                    if (M_TYPE_CODE_LIST[i] === "") return true
                    return priceInfo.M_TYPE_CODE === M_TYPE_CODE_LIST[i]
                })
                for (let j = 0; j < M_GU_CODE_LIST.length; j += 1) {
                    const insertList = typeList.filter((priceInfo: Price) => {
                        if (M_GU_CODE_LIST[j] === "") return true
                        return priceInfo.M_GU_CODE === M_GU_CODE_LIST[j]
                    })
                    // console.log(M_TYPE_CODE_LIST[i], M_GU_CODE_LIST[j], insertList.length)
                    const A_TOTAL_PRICE = (() => {
                        let price = 0
                        for (let k = 0; k < insertList.length; k += 1) {
                            price += Number(insertList[k].A_PRICE)
                        }
                        return price
                    })()
                    const C_CODE = [String(A_SEQ), P_YEAR_MONTH, M_TYPE_CODE_LIST[i], M_GU_CODE_LIST[j]].join("_")
                    // eslint-disable-next-line no-await-in-loop
                    const cntInfo = await this.countService.getCount(C_CODE)
                    if (cntInfo !== ResCode.NoContent) {
                        const { countSeq } = cntInfo
                        // eslint-disable-next-line no-await-in-loop
                        await this.countService.updateCount(countSeq, {
                            A_UNIT: A_UNIT[0],
                            length: insertList.length,
                            AVER_VAL: A_TOTAL_PRICE / insertList.length || 0,
                        })
                    } else {
                        // eslint-disable-next-line no-await-in-loop
                        await this.countService.createCount({
                            C_CODE,
                            A_SEQ: String(A_SEQ),
                            A_NAME: ITEM_OBJ[A_SEQ as keyof typeof ITEM_OBJ].A_NAME_DATA,
                            A_UNIT: A_UNIT[0],
                            P_YEAR: P_YEAR_MONTH.slice(0, 4),
                            P_YEAR_MONTH,
                            M_TYPE_CODE: M_TYPE_CODE_LIST[i],
                            M_TYPE_NAME: M_TYPE_DATA[M_TYPE_CODE_LIST[i]] || "",
                            M_GU_CODE: M_GU_CODE_LIST[j],
                            M_GU_NAME: M_GU[M_GU_CODE_LIST[j]] || "",
                            length: insertList.length,
                            AVER_VAL: A_TOTAL_PRICE / insertList.length || 0,
                        })
                    }
                }
            }
        }
        console.log(P_YEAR_MONTH)
        await Object.keys(ITEM_OBJ).reduce(async (previousPromise: any, A_SEQ) => {
            await previousPromise
            return insertCount(P_YEAR_MONTH, Number(A_SEQ), ITEM_OBJ[Number(A_SEQ) as keyof typeof ITEM_OBJ].A_UNIT)
        }, Promise.resolve())
        // await insertCount("2020-02", Number("312"), ["1개"])
        console.log("done")
        return handleResult(ResCode.OK, res)
    }

    @Get("/info")
    async getStatistics(
        @Query() { A_SEQS, P_YEAR_MONTH, M_GU_CODE }: SelectCountDto,
        @Res() res: Response,
    ): Promise<Response> {
        const P_YEAR_MONTH_LIST = (() => {
            const fillZero = (str: string) => {
                if (str.length === 1) return `0${str}`
                return str
            }
            const list = []
            let year = Number(P_YEAR_MONTH.split("-")[0])
            let month = Number(P_YEAR_MONTH.split("-")[1])
            for (let i = 0; i < 4; i += 1) {
                list.push(`${fillZero(String(year))}-${fillZero(String(month))}`)
                if (month !== 1) {
                    month -= 1
                } else {
                    month = 12
                    year -= 1
                }
            }
            return list
        })()
        const A_SEQ_LIST = A_SEQS.split(", ")
        const result = await this.countService.getStatistics({
            A_SEQ_LIST,
            P_YEAR_MONTH_LIST,
            M_GU_CODE,
        })
        return handleResult(result, res)
    }
}
