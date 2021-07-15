import { Controller, Get, Res } from '@nestjs/common';
import handleResult from 'src/common/handleResult';
import { DataService } from './data.service';
import { Response } from 'express';

@Controller('Data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get()
  async getData(@Res() res: Response) {
    const result = await this.dataService.getData();
    return handleResult(result, res);
  }
}
