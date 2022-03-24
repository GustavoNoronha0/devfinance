import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { AccountReports } from '@/interfaces/reports/account-reports.typing';
import { FindAccountReportsService as IFindAccountReportsService } from '@/interfaces/reports/find-account-reports.interface';
import { FindAccountReportsService } from '@/services/reports/find-account-reports.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => AccountReports)
export class FindAccountReportsResolver {
  constructor(
    @Inject(FindAccountReportsService) private findAccountReportsService: IFindAccountReportsService,
  ) { }
  @Query(() => AccountReports, { nullable: true })
  async reportsAccount(
    @Args('account', { type: () => ID }) account: string,
  ): Promise<AccountReports> {
    return this.findAccountReportsService.findReports(account);
  }
}
