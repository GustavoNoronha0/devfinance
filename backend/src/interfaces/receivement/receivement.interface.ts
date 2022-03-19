import { Account } from "@/database/entities/account.entity"
import { CategoryReceivement } from "@/database/entities/category-receivement.entity"

export interface Receivement {
  id: string
  account: Account
  categoryReceivement: CategoryReceivement
  title: string
  description: string
  value: number
  date: Date
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
