import { Account } from "@/database/entities/account.entity"

export interface CategoryDebit {
  id: string
  account: Account
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
