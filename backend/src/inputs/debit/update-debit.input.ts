import { InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateDebitInput {
  @IsNotEmpty()
  categoryDebit: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  date: Date;
}
