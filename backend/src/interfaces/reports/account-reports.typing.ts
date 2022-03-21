import { ObjectType } from "@nestjs/graphql"
import { Column } from "typeorm"

@ObjectType()
export class AccountReports {
  @Column()
  amountDebit: string

  @Column()
  amountReceivement: string

  @Column()
  amountTotal: string
}
