import { Controller, Get, Res } from '@nestjs/common';
import handleResult from 'src/common/handleResult';
import { EtcService } from './etc.service';
import { Response } from 'express';

@Controller('Etc')
export class EtcController {
  constructor(private etcService: EtcService) {}

  @Get()
  async getEtc(@Res() res: Response) {
    const result = await this.etcService.getEtc();
    return handleResult(result, res);
  }
}
