import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './account.entity';
import { CategoryReceivement } from './category-receivement.entity';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class Receivement extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Account)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Account

  @ManyToOne(() => CategoryReceivement)
  @JoinColumn({ name: 'category_receivement_id', referencedColumnName: 'id' })
  categoryReceivement: CategoryReceivement

  @Column({ length: 200 })
  title: string

  @Column({ length: 500 })
  description: string

  @Column()
  value: number

  @Column({ type: 'timestamp', default: 'NOW()' })
  date: Date
}
