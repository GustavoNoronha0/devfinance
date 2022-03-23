import { Controller, Get } from '@nestjs/common';
import { Args, ID } from '@nestjs/graphql';
import DownloadReportsCsv from '../services/reports/download-reports-csv.service';

@Controller('download-reports')
export default class DownloadUsersController {
  constructor(private service: DownloadReportsCsv) {}

  @Get()
  async downloadUsers(@Args('account', { type: () => ID }) account: string,): ReturnType<DownloadReportsCsv['download']> {
    return this.service.download(account);
  }
}