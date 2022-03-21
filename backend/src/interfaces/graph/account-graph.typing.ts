import { ObjectType } from "@nestjs/graphql"
import { Column } from "typeorm"

@ObjectType()
export class AccountGraph {
  @Column()
  countDebit: string

  @Column()
  countReceivement: string

  @Column()
  countTotal: string
}
