import { Field, InputType, ObjectType } from "@nestjs/graphql"

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class AccountReports {
  @Field()
  amountDebit: string

  @Field()
  amountReceivement: string

  @Field()
  amountTotal: string
}
