import { Field, InputType, ObjectType } from "@nestjs/graphql"

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class AccountGraph {
  @Field()
  countDebit: number

  @Field()
  countReceivement: number

  @Field()
  countTotal: string
}
