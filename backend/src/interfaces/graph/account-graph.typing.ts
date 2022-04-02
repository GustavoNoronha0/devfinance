import { Field, InputType, ObjectType } from "@nestjs/graphql"

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class AccountGraph {
  @Field()
  countDebit: string

  @Field()
  countReceivement: string

  @Field()
  countTotal: string
}
