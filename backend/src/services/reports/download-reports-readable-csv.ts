import { Readable } from 'stream';
import { convertJsonToCsv } from '../../shared/convert-json-to-csv';
import { AccountReports } from '@/interfaces/reports/account-reports.typing';

export default class DownloadReportsReadableAsCsv extends Readable {
  private reportsHeader = [
    'amountDebit',
    'amountReceivement',
    'amountTotal',
  ];

  constructor(private reports: AccountReports) {
    super({ objectMode: true, encoding: 'utf8' });
  }

  private finishStream() {
    this.push(null);
  }

  private sendReportsToStream(reports: AccountReports) {
    const reportsAsCsv = convertJsonToCsv(reports);
    this.push(reportsAsCsv);
  }

  // eslint-disable-next-line no-underscore-dangle
  async _read() {
    this.push(this.reportsHeader.join(';'));
    this.sendReportsToStream(this.reports);
    this.finishStream();
    return;
  }
}