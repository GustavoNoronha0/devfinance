import { Injectable, StreamableFile } from '@nestjs/common';
import DownloadReportsReadableAsCsv from './download-reports-readable-csv';
import { FindAccountReportsService } from './find-account-reports.service';

@Injectable()
export default class DownloadReportsService {
  constructor(private findAccountReportsService: FindAccountReportsService) {}

  async download(account: string): Promise<StreamableFile> {
    const reports = await this.findAccountReportsService.findReports(account)
    const downloadReportsReadableAsCsv = new DownloadReportsReadableAsCsv(
      reports,
    );
    return new StreamableFile(downloadReportsReadableAsCsv);
  }
}