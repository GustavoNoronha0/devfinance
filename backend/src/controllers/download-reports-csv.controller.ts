import { Controller, Get } from '@nestjs/common';
import { Args, ID } from '@nestjs/graphql';
import DownloadReportsCsv from '../services/reports/download-reports-csv.service';

@Controller('download-reports')
export default class DownloadReportsController {
  constructor(private service: DownloadReportsCsv) {}

  @Get()
  async downloadReports(@Args('account', { type: () => ID }) account: string,): ReturnType<DownloadReportsCsv['download']> {
    return this.service.download(account);
  }
}