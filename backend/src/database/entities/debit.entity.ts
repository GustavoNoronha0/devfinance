import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';
import { CategoryDebit } from './category-debit.entity';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class Debit extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account

  @ManyToOne(() => CategoryDebit)
  @JoinColumn({ name: 'category_debit_id', referencedColumnName: 'id' })
  categoryDebit: CategoryDebit

  @Column({ length: 200 })
  title: string

  @Column({ length: 500 })
  description: string

  @Column()
  value: number

  @Column({ type: 'timestamp', default: 'NOW()' })
  date: Date
}
