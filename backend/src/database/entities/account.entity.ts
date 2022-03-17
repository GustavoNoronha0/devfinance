import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class Account extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
