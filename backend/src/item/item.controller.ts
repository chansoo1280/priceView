import { Controller, Get, Req, Res } from '@nestjs/common'
import { Response, Request } from 'express'
import handleResult, { ResCode } from 'src/common/handleResult'
import { CATE_NAME, CATE_OBJ, GU_NAME_OBJ, NAME_OBJ, SUBCATE_LIST, TYPE_NAME_OBJ } from 'src/common/define'
import { ItemService } from './item.service'

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Get()
    async getItems(@Req() req: Request, @Res() res: Response): Promise<Response> {
        return handleResult(NAME_OBJ, res)
    }

    @Get('/cate')
    async getCates(@Req() req: Request, @Res() res: Response): Promise<Response> {
        return handleResult(
            {
                CATE_NAME,
                CATE_OBJ,
                SUBCATE_LIST,
            },
            res,
        )
    }

    @Get('/option')
    async getOptions(@Req() req: Request, @Res() res: Response): Promise<Response> {
        return handleResult(
            {
                TYPE_NAME_OBJ,
                GU_NAME_OBJ,
            },
            res,
        )
    }
}
