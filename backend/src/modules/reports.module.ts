import DownloadReportsController from '@/controllers/download-reports-csv.controller';
import { DebitRepository } from '@/repositories/debit.repository';
import { ReceivementRepository } from '@/repositories/receivement.repository';
import { FindAccountReportsResolver } from '@/resolvers/reports/find-account-reports.resolver';
import DownloadReportsService from '@/services/reports/download-reports-csv.service';
import { FindAccountReportsService } from '@/services/reports/find-account-reports.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DebitRepository, ReceivementRepository])],
  providers: [
    FindAccountReportsResolver,
    FindAccountReportsService,
    DownloadReportsService,
    DownloadReportsController
  ],
})
export class ReportsModule {}