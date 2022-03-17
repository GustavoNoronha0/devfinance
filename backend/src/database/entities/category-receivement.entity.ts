import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class CategoryReceivement extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account

  @Column({ length: 200 })
  title: string

  @Column({ length: 500 })
  description: string
}
