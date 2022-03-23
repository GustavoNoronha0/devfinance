import { StreamableFile } from "@nestjs/common";

export interface DownloadReportsCsv {
  download(account: string): StreamableFile;
}
