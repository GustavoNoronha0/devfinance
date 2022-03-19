import { Account } from "@/database/entities/account.entity"
import { CategoryDebit } from "@/database/entities/category-debit.entity"

export interface Debit {
  id: string
  account: Account
  categoryDebit: CategoryDebit
  title: string
  description: string
  value: number
  date: Date
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
